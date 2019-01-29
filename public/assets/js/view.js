//INITIALIZE parallax
$(document).ready(function () {
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('select').formSelect();
    $(".dropdown-trigger").dropdown();

    //CAPTURE "Search Recipes" Button onclick
    $("#recipes").on("click", function () {
        event.preventDefault();
        var ingredients = [];

        $("input[type=checkbox]:checked").each(function () {
            ingredients.push($(this).val().replace(/\s/g, "+").toLowerCase());
        });

        var ingredientsParams = ingredients.join(",");

        console.log("ingredients?", ingredients);
        console.log(ingredientsParams);
        
        $.ajax ({
            method: "get",
            url: `/api/search?ingredients=${ingredientsParams}`
        }).then(function(recipes) {
            console.log(recipes);
        }
        );
    });

    //CAPTURE "Add ingredient button onclick"
    $("#newFood").on("click", function () {
        event.preventDefault();
        console.log(`new food button clicked`);
    });
});

