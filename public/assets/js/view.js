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
        
        if (ingredients.length < 3) {
            alert("Please select at least three ingredients.")
        }
        
        var ingredientsParams = ingredients.join(",");

        console.log("ingredients?", ingredients);
        console.log(ingredientsParams);

        $.ajax({
            method: "get",
            url: `/api/search?ingredients=${ingredientsParams}`
        }).then(function (recipes) {
            console.log(recipes);
            getRecipe(recipes);

        }
        );
        function getRecipe(response) {

            console.log("response inside getrecipe()", response);

            for (var i = 0; i < response.length; i++) {


                recipeTitle = response;
                var recipeDiv = $("<div>");
                recipeDiv.addClass("card");
                recipeDiv.attr("id", "recipeCard");
                recipeDiv.attr({ "style": "18rem" });

                var title = $("<h5>");
                title.addClass("card-title");
                title.attr("id", "recipeTitle");
                title.text(response[i].title);

                var url = $("<a>");
                url.addClass("source_url");
                url.attr("target", "_blank")
                url.attr("href", response[i].source_url);
                url.text(response[i].source_url);


                recipeDiv.append(title);
                recipeDiv.append(url);
                $("#result").append(recipeDiv);

            }
        }
        

    });

    $("#newFood").on("click", function () {
        event.preventDefault();
        var newIngredient ={
            name: $("#name").val().trim(),
            category:$(".select-dropdown li.selected").text()
        }
        
        $.ajax("/",{
            type: "POST",
            data: newIngredient
        }).then(function(){
            console.log("Created new ingredient")
            location.reload();
        })

        console.log(`new food button clicked`);
    });    
});



