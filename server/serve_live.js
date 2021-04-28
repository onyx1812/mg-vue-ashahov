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
  port = process.env.PORT || 8001,
  app = express(),
  server = http.createServer(app);

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
app.post('/add', (req, res) => {
  connector(`
    INSERT INTO questionnaire(qIde, q0, q1, q2, q3, q4, q5, quiz, quizResulst)
    VALUES('${JSON.stringify(req.body.params.qIde)}', '${JSON.stringify(req.body.params.q0)}', '${JSON.stringify(req.body.params.q1)}', '${JSON.stringify(req.body.params.q2)}', '${JSON.stringify(req.body.params.q3)}', '${JSON.stringify(req.body.params.q4)}', '${JSON.stringify(req.body.params.q5)}', '${JSON.stringify(req.body.params.quiz)}', '${JSON.stringify(req.body.params.quizResulst)}')
  `)
    .then(result => {
      res.send({
        'status': 'succeeded'
      });
    })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
});

/*-------------------------------------------
              GET Orders
-------------------------------------------*/
app.post('/get', (req, res) => {
  connector(`SELECT * FROM questionnaire`)
    .then(result => {
      res.send(result);
    })
      .catch(err => { // Get error code
        console.log(err);
        res.send(err);
      });

});

/*-------------------------------------------
Server Listen
-------------------------------------------*/
server.listen(port, () => {
  console.log(`Server has been started on port ${port}`)
})
