const Letter = require('./letter.js')
const _ = require('underscore')

var Word = function(word){
	this.wordArray = word.split('')
	this.letters = this.wordArray.map(function(letter){
		return newLetter = new Letter(letter)
	})
	this.isSolved = false
	this.newString = function(){
		var string = ''
		this.letters.forEach(function(letter){
			string += letter.setLetter();
		})
		var stringArray = string.split('')
		var stringJoined = stringArray.join(' ')
		console.log(stringJoined)
		// console.log(stringArray)
		if(_.isEqual(stringArray, this.wordArray)){
			console.log("Solved!")
			this.isSolved = true;

		}
	}
	this.guessLetter = function(char){
		this.letters.forEach(function(letter){
			letter.checkLetter(char)
		})
	}
}

// var newWord = new Word("tanner")
// newWord.guessLetter("t")
// newWord.guessLetter("a")
// newWord.guessLetter("n")
// newWord.guessLetter("e")
// newWord.guessLetter("r")
// console.log(newWord.letters)
// newWord.newString()

module.exports = Word