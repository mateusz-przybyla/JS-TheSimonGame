var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).animate({ opacity: 0 }, 100);
  $("#" + randomChosenColour).animate({ opacity: 100 });

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

nextSequence();
