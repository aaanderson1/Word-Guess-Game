var turnsRemaining = 0;
var maxGuesses = 10;
var guesses = "";
var results = "";
var playText = document.getElementById("play-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var guessText = document.getElementById("guess-text");
var birdSpecies = [
    "Amazon",
    "Macaw",
    "Cockatoo",
    "African Grey",
    "Parakeet",
    "Cockatiel",
    "Ringneck",
    "Parrotlet",
    "Lovebird",
    "Finch",
    "Conure",
    "Dove",
    "Pigeon",
    "Quaker",
    "Caique",
    "Eclectus",
    "Lorikeet",
    "Pionus",
    "Canary",
    "Chicken",
    "Duck",
    "Senegal",
    "Toucan",      
];

var chosenWord = "";

function reset(){
    turnsRemaining = maxGuesses;
    guessesRemainingText.innerText = `Guesses Remaining: ${turnsRemaining}`;
    var arrayCount = birdSpecies.length; 
    var randomIndex = Math.floor(Math.random() * arrayCount);  
    console.log(randomIndex);
    chosenWord = birdSpecies[randomIndex];
    console.log(chosenWord);
    var tempWord = "";
    for (var i=0; i < chosenWord.length; ++i) {
        tempWord = tempWord.concat("_");
    } 
    playText.innerHTML = tempWord;
}
reset();
