var p1Button = document.querySelector("#p1Button")
var p2Button = document.getElementById("p2Button")
var resetButton = document.querySelector("#reset")
var numInput = document.querySelector("input")
var p1Score = 0
var p2Score = 0
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var gameOver = false;
var winningScore = 5;
var playingTo = document.querySelector("#targetScore")


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner")
			gameOver = true;
		}
		p1Display.textContent = p1Score
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner")
			gameOver = true;
		}
		p2Display.textContent = p2Score
	}
});

// Refactored the code by making this function reset so I can use it twice, 
// in both of the next two event listeners.
function reset(){
	p1Score = 0
	p2Score = 0
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

resetButton.addEventListener("click", function(){
	reset();
})

// Example of using 'this' which in this specific case takes the place of 'numInput'
numInput.addEventListener("change", function(){
	playingTo.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

// Ignore this comment, I ended up going back and using the following method.
// I just kept the comment for notes.
// A note about the score text changing: Another way to do this, is to 
// put a span with an id around the p1Score and p2Score on the html file, and select those
// id's instead of selecting the whole h1. It should look something like this:
// <h1><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>
// The way I did it is a bit redundant, but it still works too. 