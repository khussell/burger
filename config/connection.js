// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b38c3907d39b97",
  password: "21d8d93c",
  database: "heroku_9b1b1c289105956"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
