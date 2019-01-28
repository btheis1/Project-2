
//INITIALIZE parallax
$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('select').formSelect();

    //CAPTURE "Search Recipes" Button onclick
    $("#recipes").on("click", function() {
      event.preventDefault();
      console.log(`submit button clicked`);
    });

    //CAPTURE "Add ingredient button onclick"
    $("#newFood").on("click", function() {
      event.preventDefault();
      console.log(`new food button clicked`);
    });
  });


