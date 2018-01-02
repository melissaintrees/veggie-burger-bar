//import express
var express = require("express");

// create a router for your app
var router = express.Router();

// import the veggie burger js
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
    burger.create([
        "veggieburger_name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});

router.post("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition: ", condition);
  burger.update({
       devoured: req.body.devoured
  }, condition, function() {
       res.redirect("/");
    });
});

// export routes for server.js to use

module.exports = router;