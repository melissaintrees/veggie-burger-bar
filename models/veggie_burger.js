var orm = require("../config/orm.js");

var veggieburger = {
  all: function(cb) {
    orm.selectAll("veggieburgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb){
    orm.insertOne("veggieburgers", cols, vals, function(res){
      cb(res);
    });
  }
}

// Export the database functions for the veggie burger controller

module.exports = veggieburger;