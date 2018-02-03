var Letter = function(letter){
	this.letter = letter;
	this.beenGuessed = false;
	this.setLetter = function(){
		if (this.letter == " "){
			this.beenGuessed = true
			return (this.letter)
		} else if (!this.beenGuessed){
			return ("_")
		} else {
			return (this.letter)
		}
	}
	this.checkLetter = function(char){
		if(char.toUpperCase() == this.letter.toUpperCase()){
			console.log("Letter guessed correctly!")
			this.beenGuessed = true;
			this.setLetter();
		} 
	}
}

module.exports = Letter;