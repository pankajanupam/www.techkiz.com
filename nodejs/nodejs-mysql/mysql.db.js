var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host: "localhost",
  user: "your username",
  password: "your password"
});
 
connection.connect(function(err) {
 
  if (err) throw err;
  console.log("Connected Database");
 
  connection.query("CREATE DATABASE database_name", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
 
});
