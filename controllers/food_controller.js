var express = require("express");
var router = express.Router();
var food = require("../models/food");


router.get("/", function(req, res) {
 food.all(function (data) {
   var vegetables = data.filter(function(item) {
     return item.category === "Vegetable";
   });
  var dairy = data.filter(function(item) {
     return item.category === "Dairy";
  });
  var protein = data.filter(function(item) {
   return item.category === "Protein";
  });

 var fruit = data.filter(function(item) {
   return item.category === "Fruit";
 });
 var legumes = data.filter(function(item) {
   return item.category === "Legumes";
 });

   var hbsObject = {
   vegetables: vegetables,
   dairy: dairy,
   protein: protein,
   fruit: fruit,
   legumes: legumes,
   };
   // console.log("In the / ", hbsObject);
   res.render("index", hbsObject);
 });

});

// // Our POST request to add an ingredient to the database
// //EXPRESS POST ROUTE
router.post('/', function (req, res) {
 food.insert([
   'name', "category"],
   [req.body.name, req.body.category],
    function (result) {
     console.log(result);
  
   res.json(result);

   

 });
});
module.exports = router;