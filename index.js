var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var lock = false;

//start game

$(document).keypress(function (event) {
  if (lock === false && event.key === "a") {
    $("h1").text("Level " + level);
    nextSequence();
    lock = true;
  }
});

//game

$(".btn").on("click", function () {
  if (lock === true) {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log("b: " + userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  }
});

function checkAnswer(currentLevel) {
  console.log(gamePattern.length - 1);
  console.log(currentLevel);

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        userClickedPattern.length = 0;
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
  }
}

function nextSequence() {
  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log("a: " + gamePattern);

  $("#" + randomChosenColour).animate({ opacity: 0 }, 100);
  $("#" + randomChosenColour).animate({ opacity: 100 });

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
