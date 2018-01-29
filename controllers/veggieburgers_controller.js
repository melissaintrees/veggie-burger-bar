//import express
var express = require("express");

// create a router for your app
var router = express.Router();

// import the veggie burger js
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// This route reads all the veggie burgers in the database and renders it to the index.handlebars page
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// This route creates a burger that the user enters, adds it to the database using the req object and then redirects the user back to the home page so they can "order" their creation.
router.post("/", function(req, res) {
    burger.create([
        "veggieburger_name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});

// This route uses the Id of the Mysql Entry to dynamically change the state of the veggie burger to either, "To be Ordered," or "To Be Eaten"
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