var express = require("express");

var router = express.Router();

// router.get("/",function(req, res){
//   res.send("hello world");
// });
//  Import the model (food.js) to use its database functions.
var food = require("../models/food.js");
router.get("/", function(req, res) {
// res.redirect("/view");
});
// // Create all our routes and set up logic within those routes where required.
router.get("/view", function (req, res) {
 food.all(function (data) {
    var hbsObject = {
    view: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// // Our POST request to add an ingredient to the database
// //EXPRESS POST ROUTE
router.post('/api/create', function (req, res) {
  food.insert([
    'name', "category"], 
    [req.body.name, req.body.category],
     function (result) {
    res.json({id: result.insertId});
    
  });
});

// //EXPRESS PUT ROUTE
router.put('/api/view/:id', function (req, res) {
  var newFood =  "id =" + req.params.id;

  console.log("newFood", newFood);

  food.update(
     newFood, function (data) {
      //  res.redirect("/");
      res.end();
  
  });
});

// Export routes for server.js to use.
module.exports = router;