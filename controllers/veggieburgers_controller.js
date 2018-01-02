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

router.post("/", function(request, result) {
    burger.create([
        "veggieburger_name"
    ], [
        request.body.name
    ], function() {
        result.redirect("/");
    });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition: ", condition);
  burger.update({
       devoured: req.body.devoured
  }, condition, function() {
       result.redirect("/");
    });
});

// export routes for server.js to use

module.exports = router;