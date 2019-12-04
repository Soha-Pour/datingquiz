$(document).ready(function(){

  $("form#choices").submit(function(event) {
    var animalChoice = parseInt($("#animalChoice").val());
    var foodChoice = parseInt($("#foodChoice").val());
    var activityChoice = parseInt($("#activityChoice").val());
    event.preventDefault();
    $(".hidden").hide();

    if (animalChoice === 1 && foodChoice === 1 && activityChoice === 1) {
      $("#chris").show();
    } else if (animalChoice === 2 && foodChoice === 2 && activityChoice === 2) {
      $("#obama").show();
    } else if (animalChoice === 3 && foodChoice === 3 && activityChoice === 3) {
      $("#cardi").show();
    } else if (animalChoice === 1 || foodChoice === 2 || activityChoice === 3) {
      $("#soha").show();
    }


  });







});
