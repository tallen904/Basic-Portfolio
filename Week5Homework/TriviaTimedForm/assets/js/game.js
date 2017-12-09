 var questions = {
	question1 : "What is Darth Vader's true name?",
	question2 : "Who is Kylo Ren's mother?",
	question3 : "Which planet is Padme Amidala from?",
	question4 : "What is the name of the Emperor's battlestation/super weapon?",
	question5 : "Who trains Luke Skywalker in the Dagobah System?"
};

var correctAnswers = {
	answer1: "Anakin Skywalker",
	answer2: "Leia Organa",
	answer3: "Naboo",
	answer4: "The Death Star",
	answer5: "Yoda"
}

var question1Answers = ["", "", "", ""]
var question2Answers = ["", "", "", ""]
var question3Answers = ["", "", "", ""]
var question4Answers = ["", "", "", ""]
var question5Answers = ["", "", "", ""]

var rightAnswers = 0;
var wrongAnswers = 0;

var timer = $("#timer");
var timeLeft = 30;


window.onload = function(){
	$("#questions").hide();
}

$("#startBtn").on("click", function(){
	$("#questions").show();
	var countdown = setInterval(function(){
		timeLeft--;
		timer.text("Time Remaining: " + timeLeft + " seconds");
		if (timeLeft === 0){
			clearInterval(countdown);
		}
	}, 1000);
})

function count(){
	timeLeft--;
	timer.text("Time Remaining: " + timeLeft + " seconds");
	if (timeLeft === 0){
	clearInterval(countdown);
}}

function timer(){
	timeLeft--;
	timer.text("Time Remaining: " + timeLeft + " seconds");
}

function timesUp(){
	if($("#question1 > input:checked").val() == "anakinSkywalker"){
		rightAnswers++;
	} else if ($("#question1 > input:checked").val() !== "anakinSkywalker"){
		wrongAnswers++;
	}

	if($("#question2 > input:checked").val() == "leiaOrgana"){
		rightAnswers++;
	} else if ($("#question2 > input:checked").val() !== "leiaOrgana"){
		wrongAnswers++;
	}

	if($("#question3 > input:checked").val() == "naboo"){
		rightAnswers++;
	} else if ($("#question3 > input:checked").val() !== "naboo"){
		wrongAnswers++;
	}

	if($("#question4 > input:checked").val() == "theDeathStar"){
		rightAnswers++;
	} else if ($("#question4 > input:checked").val() !== "theDeathStar"){
		wrongAnswers++;
	}

	if($("#question5 > input:checked").val() == "yoda"){
		rightAnswers++;
	} else if ($("#question5 > input:checked").val() !== "yoda"){
		wrongAnswers++;
	}

	$("#rightAnswers").text("Right Answers: " + rightAnswers);
	$("#wrongAnswers").text("Wrong Answers: " + wrongAnswers);
}