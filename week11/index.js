const inquirer = require('inquirer');
const word = require('./word.js');
const _ = require('underscore');
var answer;
var lettersGuessed = [];
var guessCount = 14;

var potentialWords = ["Cheetah", "Gorilla", "Lion", "Panda", "Zebra", "Monkey", "Flamingo", "Condor", "Antelope", "Giraffe"];
var currentWord = function(){
	answer = potentialWords[Math.floor(Math.random() * potentialWords.length)];
}
currentWord();

function wasSolved(){
	if(answerWord.letters.every(function(letter){
		return letter.beenGuessed = true
	})){
		answerWord.solved = true;
		return true;
	}
}

var answerWord = new word(answer)
answerWord.newString();
console.log("Guesses Remaining: " + guessCount)

function userInputPrompt(){
	inquirer.prompt([
		{
			name: "guess",
			message: "Guess a letter!"
		}
	])
	.then(function(response){
		lettersGuessed.forEach(function(letter){
			if(letter == response.guess){
				console.log("This letter has already been guessed!");
				userInputPrompt();
			}
		})
		guessCount--;
		lettersGuessed.push(response.guess)
		console.log("Guesses Remaining: " + guessCount)
		answerWord.guessLetter(response.guess);
		var updatedWord = answerWord.newString();
		if(answerWord.isSolved){
			return
		}
		if(guessCount == 0){
			console.log("You ran out of guesses!")
			return
		}
		userInputPrompt();
})
}
userInputPrompt()