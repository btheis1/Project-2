// var db = require("../models");

// module.exports = function(app) {
//     // this route should find all ingredients in the table and display them as JSON
//     app.get("/api/ingredients", function(req, res) {
//         db.Food.findAll({})
//         .then(function(ingredients) {
//             res.json(ingredients);
//         }).catch(function(err){
//             console.log(err)
//             res.json(err)
//         });
//     });

//     // this route should add a new ingredient to the table
// 	app.post("/api/ingredients", function(req, res) {
//         db.Food.create({
//             name: req.body.name,
//             category: req.body.category
//             })
//             .then(function(ingredients) {
//                 console.log(" New Food added: ",ingredients.dataValues)
//                 res.json(ingredients);
//             }).catch(function(err){
//                 console.log(err)
//                 res.json(err)
//             });
//     });
//     app.get("/api/ingredients", function(req, res) {
//         db.Food.findAll({})
//         .then(function(ingredients) {
//             res.json(ingredients);
//         }).catch(function(err){
//             console.log(err)
//             res.json(err)
//         });
//     });
//     // this route should add a new user to the table
// 	app.post("/api/users", function(req, res) {
//         db.Food.create({
//             name: req.body.name,
//             emai: req.body.email,
//             password: req.body.password
//             })
//             .then(function(user) {
//                 console.log(" New Food added: ",users.dataValues)
//                 res.json(user);
//             }).catch(function(err){
//                 console.log(err)
//                 res.json(err)
//             });
//     });
// }
