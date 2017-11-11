// Variables
var wins = 0;

var winCount = document.querySelector("#wins");

var losses = 0;

var lossCount = document.querySelector("#losses");

var guessesLeft = 9;

var guessCount = document.querySelector("#remainingGuesses");

var guesses = [];

var lettersGuessed = document.querySelector("#lettersGuessed");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var answer = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {

	// Sets the user's guess to the key pressed.
	var userGuess = event.key;

	// Check userGuess against answer
	if (guessesLeft === 0){
		alert("You lose!")
		loser();
	}

	if (userGuess !== answer){
		guessesLeft --;
		guesses.push(userGuess);
		guessCount.textContent = "Guesses remaining: " + guessesLeft
		lettersGuessed.textContent = "Your guesses so far: " + guesses;
	} else {
		winner();
	}
}

function winner(){
	wins ++;
	winCount.textContent = "Wins: " + wins;
	guessesLeft = 9;
	guesses = [];
	answerFunc();
}

function loser(){
		losses ++;
		lossCount.textContent = "Losses: " + losses;
		answerFunc();
		guessesLeft = 9;
		guesses = []
}

function answerFunc() {
	answer = letters[Math.floor(Math.random() * letters.length)]
}