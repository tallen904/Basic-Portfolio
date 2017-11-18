// Variables
var wins = 0;
var winCount = document.querySelector("#wins");

var guess;
var guessInput = document.querySelector("#letter");
var guessCount = 10;
var guessesLeft = document.querySelector("#guessesLeft");
var guesses = [];
var lettersGuessed = document.querySelector("#lettersGuessed");
var guessButton = document.querySelector("#guess");
var lettersToShow;

var currentWord = document.querySelector("#currentWord");
var words = ["Cheetah", "Gorilla", "Lion", "Panda", "Zebra", "Chimpanzee", "Flamingo", "Condor", "Antelope", "Giraffe"];
var answer = words[Math.floor(Math.random() * words.length)];
var word = answer.replace(/./g, "_ ");

var resetButton = document.querySelector("#restart");

// Functions

function wordFunc(){
	for (i = 0; i < answer.length; i++) {
			var letterDiv = document.createElement("div");
			letterDiv.classList.add("letter")
			var letter = answer.charAt(i).toUpperCase();
			letterDiv.textContent = letter;
			currentWord.appendChild(letterDiv);
    }
}

function setup(){
	answer = words[Math.floor(Math.random() * words.length)];
	guessCount = 10;
	guessesLeft.textContent = guessCount;
	guesses = [];
	winCount.textContent = "Wins: " + wins;
	// currentWord.textContent = word;
	wordFunc();
}


// Change n to the variable for my guess letter when calling the function
function checkLetter(n){
	for (i = 0; i < answer.length; i++){
		console.log(answer[i].toLowerCase() + "==" + n);
		if(answer[i].toLowerCase() == n.toLowerCase()){
			currentWord = setCharAt(currentWord,i,n);
		}
	}
	console.log("[" + currentWord + "]");
}

function winner(){	
}

// Code

// Sets the game up on page load
window.onload = setup();

// Restarts the game when clicked
resetButton.onclick = setup();


document.querySelector("#guess").onsubmit = function(e){
	if (e.preventDefault) e.preventDefault();
	guess = guessInput.value;

	// Checks if guess has a value assigned
	if (guess){
		
		if (answer.indexOf(guess) > -1) {
			lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());
			for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }
		}

	}
}