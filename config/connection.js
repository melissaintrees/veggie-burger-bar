// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "cr8lifenow222",
  database: "veggieburgers_db"
});
console.log("connected to mysql on port: " + connection.config.port);
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId );
});

// Export connection for our ORM to use.
module.exports = connection;