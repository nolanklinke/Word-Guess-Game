
var wins = 0;
var guessesRemaining = 6;
var computerChoice = "";
var country = ["Germany", "Brazil", "France", "Argentina", "Spain", "Chile", "Belgium", "Netherlands", "Portugal", "England"];

//create buttons for user
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (var i = 0; i < letters.length; i++) {

    var letterButton = $("<button>");
    letterButton.addClass("letter-button letter letter-button-color");
    letterButton.attr("data-letter", letters[i]);
    letterButton.text(letters[i]);
    letterButton.appendTo("#buttons");
    
}

//generate random word to guess
function refreshWord() {
    computerChoice = country[Math.floor(Math.random() * country.length)];
    console.log(computerChoice);

}

refreshWord();

//seperate computerChoice into individual characters
for (var j = 0; j < computerChoice.length; j++) {

    //document.getElementById("currentWord").innerHTML += " " + computerChoice[j];
    var newSpan = $("<span>");
    newSpan.text(" " + computerChoice[j]).after(" ");
    newSpan.addClass("border-bottom m-3");
    newSpan.appendTo("#currentWord");
}











