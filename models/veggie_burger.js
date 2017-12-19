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
  },
  update: function(objColVals, condition, cb){
    orm.updateOne("veggieburgers", objColVals, condition, function(res){
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.deleteOne("veggieburgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the veggie burger controller

module.exports = veggieburger;