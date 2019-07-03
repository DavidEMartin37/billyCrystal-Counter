var crystal = {
  forgetParis:
  {
    name: "Forget Paris",
    value: 0
  },
  citySlicker:
  {
    name: "City Slicker",
    value: 0
  },
  analyseThat:
  {
    name: "Analyse That",
    value: 0
  },
  princessBride:
  {
    name: "Princess Bride",
    value: 0
  }
};
var targetScore = 0;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;

function startGame() {
  $("#total-score").empty();
  totalScore = 0;
  targetScore = Math.floor(Math.random() * 102) + 19;
  console.log(targetScore);
  crystal.forgetParis.value = Math.floor(Math.random() * 11) + 1;
  crystal.citySlicker.value = Math.floor(Math.random() * 11) + 1;
  crystal.analyseThat.value = Math.floor(Math.random() * 11) + 1;
  crystal.princessBride.value = Math.floor(Math.random() * 11) + 1;
  console.log(crystal.forgetParis.value);
  console.log(crystal.citySlicker.value);
  console.log(crystal.analyseThat.value);
  console.log(crystal.princessBride.value);
  $("#total-score").text(totalScore);
  $("#target-score").text(targetScore);
  eventListener();
  
};

function result() {
  if (totalScore < targetScore) {
    return;
  }else if (totalScore > targetScore) {
    alert("You Lose");
    lossCount++;
    $("#loss-count").text("Losses: " + lossCount);
    startGame();
  }else if (totalScore === targetScore) {
    alert("You Win");
    winCount++;
    $("#win-count").text("Wins: " + winCount);
    startGame();
  }
};

function eventListener(click) {
$("#forget-paris").on("click", function() {
  totalScore += crystal.forgetParis.value;
  $("#total-score").text(totalScore);
  console.log(totalScore);
  result();
});
$("#city-slicker").on("click", function() {
  totalScore += crystal.citySlicker.value;
  $("#total-score").text(totalScore);
  console.log(totalScore);
  result();
});
$("#analyse-that").on("click", function() {
  totalScore += crystal.analyseThat.value;
  $("#total-score").text(totalScore);
  console.log(totalScore);
  result();
});
$("#princess-bride").on("click", function() {
  totalScore += crystal.princessBride.value;
  $("#total-score").text(totalScore);
  console.log(totalScore);
  result();
});

};
startGame();
