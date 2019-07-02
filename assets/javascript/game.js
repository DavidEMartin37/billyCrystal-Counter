
var targetNumber = 120;
$("#number-to-guess").text(targetNumber);

var counter = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var i = 0; i < numberOptions.length; i++); {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "assets/images/forget-paris.jpg");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}
//var increment = numberOptions[Math.round(Math.random())];
$(".crystal-image").on("click", function() {
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  
  alert("New score: " + counter);
  if (counter === targetNumber) {
    alert("You Win!");
  }else if (counter >= targetNumber) {
    alert("You Lose!");
  }
  
});

//var crystalValue = Math.floor(Math.random() * 12) + 1;