var express = require("express");
var router = express.Router();
var food = require("../models/food");
console.log ("hello world");

// router.get("/",function(req, res){
//   res.send("hello world");
// });
//  Import the model (food.js) to use its database functions.

router.get("/", function(req, res) {
  food.all(function (data) {
    var hbsObject = {
    food: data
    };
    console.log("In the / ", hbsObject);
    res.render("index", hbsObject);
  });

});
// // Create all our routes and set up logic within those routes where required.
router.get("/view", function (req, res) {
 food.all(function (data) {
    var hbsObject = {
    view: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// // Our POST request to add an ingredient to the database
// //EXPRESS POST ROUTE
router.post('/view/create', function (req, res) {
  // food.insert([
  //   'name', "category"], 
  //   [req.body.name, req.body.category],
  //    function (result) {
  //     console.log(result);
  //     res.redirect("/");
  food.create(req.body.name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    // console.log(result);
    res.redirect("/view");
    
  });
});

// //EXPRESS PUT ROUTE
router.put('/view/update/:id', function (req, res) {
  var newFood =  "id =" + req.params.id;

  // console.log("newFood", newFood);

 });

// Export routes for server.js to use.
module.exports = router;