/*-------------------------------------------
              C O N S T S
-------------------------------------------*/
const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  http = require('http'),
  reload = require('reload'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8002,
  app = express(),
  server = http.createServer(app),
  stripe = require('stripe')('sk_test_Tdn64ZHF8E2SG6RF1nONNQUh'),
  sendEmail = require('./partials/sendEmail.js');

/*-------------------------------------------
              Connect DB
-------------------------------------------*/
const mysql = require('mysql')
const db_conf = require('./db/live.js')
const db = mysql.createConnection(db_conf)
db.connect(err => {
  if(err){ throw err }
})
const connector = sqlQuery => {
  return new Promise((resolve, reject) => {
    db.query(sqlQuery, (error, results, fields) => {
        if (error) reject(error);
        else resolve(results);
    });
  });
}

/*-------------------------------------------
              Path settings
-------------------------------------------*/
const frontPath = path.join(__dirname, '../front/dist/')

app.use(history())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.set("view options", {layout: false})
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(frontPath))
app.use(express.static(frontPath))
app.use(express.json())

/*-------------------------------------------
              R O U T I N G
-------------------------------------------*/
app.get('/', (req, res) => {
  res.render(path.join(frontPath+'index.html'))
});

/*-------------------------------------------
              Checkout charging
-------------------------------------------*/
app.post('/charge', (req, res) => {
  let order_id = 0;

  connector(`
    INSERT INTO orders(status, total, course_id, first_name, last_name, email, phone, card_number, card_month, card_year, card_code)
    VALUES("Pending", "${req.body.params.amount}", "${req.body.params.course_id}", "${req.body.params.first_name}", "${req.body.params.last_name}", "${req.body.params.email}", "${req.body.params.phone}", "${req.body.params.card_number}", "${req.body.params.card_month}", "${req.body.params.card_year}", "${req.body.params.card_code}")
  `)
    .then(order => { // Get order result
      order_id = order.insertId;
      return stripe.tokens.create({
        card: {
          number: req.body.params.card_number,
          exp_month: Number(req.body.params.card_month),
          exp_year: Number(req.body.params.card_year),
          cvc: req.body.params.card_code
        }
      }); // Request Stripe card token
    })
      .then(token => { //Get stripe token result
        return stripe.customers.create({
          source: token.id,
          email: req.body.params.email,
          name: req.body.params.first_name+' '+req.body.params.last_name,
          phone: req.body.params.phone,
        }); // Request to create stripe customer
      })
        .then(customer => { //Get stripe customer result
          return stripe.charges.create({
            amount: Number(req.body.params.amount) * 100,
            currency: req.body.params.currency,
            description: `Order #dev_vshred_${order_id}`,
            'customer': customer.id,
            receipt_email: req.body.params.email,
            metadata: {
              'order_id': order_id
            }
          }); // Request to create Stripe charge
        })
          .then(charge => { //Get stripe charge result
            if( charge.status === "succeeded" ){
              connector(`UPDATE orders SET status = "Paid" WHERE ID = ${order_id}`);
              sendEmail.welcome(req.body.params.email, '0000000000')
                .then(result => {
                  res.send({
                    'status': 'succeeded',
                    'user_email': req.body.params.email,
                    'user_pass': '0000000000' //_____________________NEED REQUEST PASSWORD FROM SERVER VIDEO
                  });
                });
            } else {
              let err = {
                status: 'error',
                msg: `${charge.raw.message}`
              }
              throw err;
            }
          })
            .catch(err => { // Get error code
              console.log(err);
              res.send(err);
            });
});

/*-------------------------------------------
              GET Orders
-------------------------------------------*/
app.post('/orders', (req, res) => {
  connector(`SELECT * FROM orders`)
    .then(result => {
      res.send(result);
    })
      .catch(err => { // Get error code
        console.log(err);
        res.send(err);
      });

});

/*-------------------------------------------
              START Klaviyo
-------------------------------------------*/
const
  Klaviyo = require('klaviyo-node'),
  client = new Klaviyo('XDGXFa'),
  request = require("request");

app.post('/klaviyo/identify', (req, res) => {
  client.track('Started Checkout', req.body.params.email,{
    '$first_name': req.body.params.first_name,
    '$last_name': req.body.params.last_name
  });
  client.identify(req.body.params.email, {
    '$first_name': req.body.params.first_name,
    '$last_name': req.body.params.last_name
  });
});

/*-------------------------------------------
Server Listen
-------------------------------------------*/
server.listen(port, () => {
  console.log(`Server has been started on port ${port}`)
})
