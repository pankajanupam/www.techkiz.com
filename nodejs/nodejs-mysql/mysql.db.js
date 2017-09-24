var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "your username",
  password: "your password",
  database: "database_name"
});

connection.connect(function(err) {

  if (err) throw err;
  console.log("Database Connected");

  connection.query("CREATE TABLE user (name VARCHAR(255), email VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
});
