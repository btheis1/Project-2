//INITIALIZE parallax
$(document).ready(function(){
    $('.parallax').parallax();
  });

//INITIALIZE collapsable
$(document).ready(function(){
    $('.collapsible').collapsible();
  });
  function recipeSearch(cuisineName) {

    var recipeData = [];
    var recipes = [];
    var cardNum = ["#card-one", "#card-two", "#card-three"];
    var queryURL;
    var ingredient;
    var ingrNoSpace;
    var params = [];
    var refinedQuery;

    $('.collapsible-header').on('change', ':checkbox', function () {

        params = [];
        $("#.collapsible-header input[type=checkbox]").each(function () {
            if ($(this).is(':checked')) {
                console.log($(this).val())
                params.push("&ingredients[]=categories^categories-" + $(this).val());
    
            }
        })
        console.log(params);
    });
//API for food2fork.com
var food2fork = "https://www.food2fork.com/api/search?key=270cecccb9074d390891a3c7d06ad49b&q=" + ingredients + "&count=1";

$.ajax({
    url: food2fork,
    method: "GET"
}).then(function (data) {
    // console.log(data);

    recipeData.splice(0, 1, JSON.parse(data));
    recipes = recipeData[0].recipes;
    console.log(recipeData);
//testing purpose
    if (recipes.length === 0) {
        alert("There is no recipe for " + recipeSearch + "search.");
        return;
    }
    for (var i = 0; i < cardNum.length; i++) {
        $(cardNum[i] + " #card-header").text(recipes[i].title);
        $(cardNum[i] + " img").attr("src", recipes[i].image_url);
        $(cardNum[i] + " #card-publisher").text("Published by " + recipes[i].publisher);
        $(cardNum[i] + " #card-rating").text("Rating is " + parseInt(recipes[i].social_rank) + "%");
        $(cardNum[i] + " #card-link").text(recipes[i].source_url);
        $(cardNum[i] + " #card-link").attr("href", recipes[i].source_url);
    }
})

}

