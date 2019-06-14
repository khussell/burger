// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "	c9cujduvu830eexs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "	tse72b46banq9whs",
  password: "	drbxme1v88oeuvmr",
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
