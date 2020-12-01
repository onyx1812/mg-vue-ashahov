module.exports = (db, callback) => {

  const tables = [
    {
      name: 'questionnaire',
      sql: `ID INT AUTO_INCREMENT,
            PRIMARY KEY(ID),
            date DATETIME DEFAULT NOW(),
            qIde TEXT,
            q0 TEXT,
            q1 TEXT,
            q2 TEXT,
            q3 TEXT,
            q4 TEXT,
            q5 TEXT
            `
    }
  ]

  tables.forEach(table => {
      sql = `CREATE TABLE ${table.name}(${table.sql})`
      db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(`  Table "${table.name}" created!`);
        db.end();
      })
  })
}