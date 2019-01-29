var express = require("express");
var router = express.Router();
var food = require("../models/food");
var axios = require("axios");

console.log("api key", process.env.FOOD2FORK_API_KEY)

router.get("/", function (req, res) {
  food.all(function (data) {
    var vegetables = data.filter(function (item) {
      return item.category === "Vegetable";
    });
    var dairy = data.filter(function (item) {
      return item.category === "Dairy";
    });
    var protein = data.filter(function (item) {
      return item.category === "Protein";
    });

    var fruit = data.filter(function (item) {
      return item.category === "Fruit";
    });
    var legumes = data.filter(function (item) {
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


router.get("/api/search", function (req, res) {
  console.log("query params", req.query);
  axios.get(`https://www.food2fork.com/api/search?key=${process.env.FOOD2FORK_API_KEY}&q=${req.query.ingredients}&count=8`, {
    headers: { "Accept": "application/json" }

  })

    .then(function (response) {

      res.json(response.data.recipes);
      
    })
    .catch(function (err) {
      res.json(err);
    })
})

// // Create all our routes and set up logic within those routes where required.
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

// //EXPRESS ROUTE TO ADD INGREDIENT
// router.post('/', function (req, res) {

// })


// Export routes for server.js to use.
module.exports = router;