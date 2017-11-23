// Variables
var wins = 0;
var losses = 0;
var currentScore = 0;

var targetScore = Math.floor(Math.random() * 120) + 20;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

$("#crystal1").val(crystal1);
$("#crystal2").val(crystal2);
$("#crystal3").val(crystal3);
$("#crystal4").val(crystal4);


// Functions
function setup(){
	wins = 0;
	losses = 0;
	$("#wins").text("Wins: " + wins);
	$("#losses").text("Losses: " + losses);
	resetGame();
}

function winner(){
	wins ++;
	$("#wins").text("Wins: " + wins);
	alert("You won!");
	resetGame();
}

function loser(){
	losses ++;
	$("#losses").text("Losses: " + losses);
	alert("You lost!")
	resetGame();
}


function resetGame(){
	currentScore = 0
	targetScore = Math.floor(Math.random() * 120) + 20;
	crystal1 = Math.floor(Math.random() * 12) + 1;
	crystal2 = Math.floor(Math.random() * 12) + 1;
	crystal3 = Math.floor(Math.random() * 12) + 1;
	crystal4 = Math.floor(Math.random() * 12) + 1;
	$("#targetScore").text("Target Score: " + targetScore);
	$("#currentScore").text("Your current score is: " + currentScore);

}

// Code

setup();

$("#crystal1").on("click", function(){
	currentScore = currentScore + crystal1;
	$("#currentScore").text("Your current score is: " + currentScore);
	if (currentScore === targetScore){
	winner();
} else if (currentScore > targetScore){
	loser();
} else {
	console.log("Keep Going");
}
});

$("#crystal2").on("click", function(){
	currentScore = currentScore + crystal2;
	$("#currentScore").text("Your current score is: " + currentScore);
	if (currentScore === targetScore){
	winner();
} else if (currentScore > targetScore){
	loser();
} else {
	console.log("Keep Going");
}
});

$("#crystal3").on("click", function(){
	currentScore = currentScore + crystal3;
	$("#currentScore").text("Your current score is: " + currentScore);
	if (currentScore === targetScore){
	winner();
} else if (currentScore > targetScore){
	loser();
} else {
	console.log("Keep Going");
}
});

$("#crystal4").on("click", function(){
	currentScore = currentScore + crystal4;
	$("#currentScore").text("Your current score is: " + currentScore);
	if (currentScore === targetScore){
	winner();
} else if (currentScore > targetScore){
	loser();
} else {
	console.log("Keep Going");
}
});


// a function using 'this' that I attempted and failed to utilize. 
// Kept getting the error 'this.val()' is not a function, not sure why.

// $(".crystal").on("click", function(){
// 	console.log(this);
// 	currentScore = currentScore + (this.val());
// 	$("#currentScore").text("Your current score is: " + currentScore);
// 	if (currentScore === targetScore){
// 		winner();
// 	} else if (currentScore > targetScore){
// 		loser();
// 	} else {
// 		console.log("Keep Going!");
// 	}
// })

