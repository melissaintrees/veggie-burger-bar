//import express
var express = require("express");

// import the veggie burger js
var veggie_burger = require("../models/veggie_burger.js");

// create a router for your app
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  veggie_burger.all(function(data) {
    var hbsObject = {
      veggieburgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/veggieburgers", function(req, res){
  veggie_burger.create([
      "veggieburger_name", "devoured"
    ], [
      req.body.veggieburger_name, req.body.devoured
    ], function(result){
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
  });
});

router.delete("/api/veggieburgers/:id", function(req, res){
  var condition = "id = " + req.params.id;

  veggie_burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;