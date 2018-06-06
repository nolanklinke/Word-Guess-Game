
var wins = 0;
var guessesRemaining = 6;
var computerChoice = "";
var country = ["Germany", "Brazil", "France", "Argentina", "Spain", "Chile", "Belgium", "Netherlands", "Portugal", "England"];

//create buttons for user
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (var i = 0; i < letters.length; i++) {

    var letterButton = $("<button>");
    letterButton.addClass("letter-button letter letter-button-color m-1");
    letterButton.attr("data-letter", letters[i]);
    letterButton.text(letters[i]);
    letterButton.appendTo("#buttons");
    
};

//generate random word to guess
function refreshWord() {
    computerChoice = country[Math.floor(Math.random() * country.length)];
    console.log(computerChoice);

};

refreshWord();

//call function to update wins
function updateWins() {
    $("#winsDisplay").text("Wins: " + wins);
}

updateWins();

//call function to update guesses
function guessUpdate() {
    $("#guessLeft").text(guessesRemaining);
}

guessUpdate();

//document letters guessed & update guesses
$(".letter-button").on("click", function () {

    var userGuess = $("<span>")

    userGuess.text($(this).attr("data-letter"));

    userGuess.appendTo("#lettersGuessed");

    guessesRemaining--;

    guessUpdate();

});

//seperate computerChoice into individual characters
for (var j = 0; j < computerChoice.length; j++) {

    //document.getElementById("currentWord").innerHTML += " " + computerChoice[j];
    var newSpan = $("<span>");
    newSpan.text(" " + computerChoice[j]).after(" ");
    newSpan.addClass("border-bottom m-3");
    newSpan.appendTo("#currentWord");
};

//declare clicking a letter button as a guess and hide
$(".letter-button").on("click", function() {

});

//PSUEDO - What I would still like to do
// make words dissapear
//show picture of country flag when word is guessed
//play national anthem of that country
//make it pretty











