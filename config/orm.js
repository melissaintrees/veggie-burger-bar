// Import MySQL connection.
let connection = require("./connection.js");

let tableName = "burgers";

console.log(Object.RowDataPacket);

// Helper function that converts the : to = so it update fn can read sql call
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
     
    }
    return arr.toString();
    console.log("the new syntax arr: ", arr);
}


let orm = {
  //Get the burgers
  selectAll: function(tableInput, callback) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  // Insert a burger into the DB
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (?)";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
    updateOne: function(table, objColVals, burgerId, cb) {
    var queryString = "UPDATE " + table;
    console.log("object col vals: ", objColVals)
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += burgerId;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
//   updateOne: function(table, objColVals, burgerId, cb) {
//     var queryString = "UPDATE " + table;
//     console.log("object col vals: ", objColVals)
//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += burgerId;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   }
// };
// export the orm object for the model burger.js
module.exports = orm;