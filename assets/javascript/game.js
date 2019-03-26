var turnsRemaining = 0;
var maxGuesses = 10;
var guesses = "";
var results = "";
var playText = document.getElementById("play-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var guessText = document.getElementById("guess-text");
function reset(){
    turnsRemaining = maxGuesses;
    guessesRemainingText.innerText = `Guesses Remaining: ${turnsRemaining}`;
}
reset();