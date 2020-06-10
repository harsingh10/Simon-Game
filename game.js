var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;
$(document).keypress(function (){

   if(!started)
   {
     started=true;
     $("h1").text("Level"+  "  " + level);

     nextSequence();

   }

});



$(".btn").click(
  function(){


var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);

buttonClick(userChosenColour);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    }
    else
    {
      buttonClick("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over")
      }, 2000);
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
      

    }

}

function nextSequence()
{
    level++;
    userClickedPattern = [];

    var randomNumber = Math.floor((Math.random() * 4));


    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut().fadeIn();
    $("h1").text("Level"+  " " + level);

}





function buttonClick(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
       $("#" + currentColour).removeClass("pressed");
   }, 100);

}
function startOver()
{
  level=0;
  gamePattern = [];
  started = false;

}
