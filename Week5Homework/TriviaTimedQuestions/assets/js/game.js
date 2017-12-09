var timer = $("#timer");
var timeLeft = 10;

var displayedQuestion = $("#displayedQuestion");
var q1 = $("#q1")
var q2 = $("#q2")
var q3 = $("#q3")
var q4 = $("#q4")

var questions = {
	question1: "What is Darth Vader's true name?",
	question2: "Who is Kylo Ren's mother?",
	question3: "Which planet is Padme Amidala from?",
	question4: "What is the name of the Emperor's battlestation/super weapon?",
	question5: "Who trains Luke Skywalker in the Dagobah System?"
};

var question1 = {
	option1: "Obi Wan Kenobi",
	option1: "Anakin Skywalker",
	option1: "Jar Jar Binks",
	option1: "Finn"
};

var question2 = {
	option1: "Leia Organa",
	option2: "Padme Amidala",
	option3: "Rey",
	option4: "Mon Mothma"
};

var question3 = {
	option1: "Tatooine"
	option2: "Yavin IV"
	option3: "Naboo"
	option4: "Coruscant"
}

var question4 = {
	option1: "Starkiller Base"
	option2: "The Jedi Temple"
	option3: "Wieny Hut Junior"
	option4: "The Death Star"
}

var question5 = {
	option1: "Yoda"
	option2: "Mace Windu"
	option3: "R2D2"
	option4: "Qui-Gon Jinn"
}

var rightAnswers = 0;
var wrongAnswers = 0;

window.onload = function(){
	$("#questions").hide();
};

$("#startBtn").on("click", function(){
	var countdown = setInterval(function(){
		timeLeft--;
		timer.text("Time Remaining: " + timeLeft + " seconds");
		if (timeLeft === 0){
			nextQuestion();
		}
	})
});

function question(questions.currentQuestion){
	
}


function nextQuestion(){
	if (displayedQuestion.val() === "question1"){
		displayedQuestion.val("question2");
		displayedQuestion.text(questions.question2);
		q1.text(question2.option1);
		q2.text(question2.option2);
		q3.text(question2.option3);
		q4.text(question2.option4);
	}
	if (displayedQuestion.val() === "question2"){
		displayedQuestion.val("question3");
		displayedQuestion.text(questions.question3);
		q1.text(question3.option1);
		q2.text(question3.option2);
		q3.text(question3.option3);
		q4.text(question3.option4);
	}
	if (displayedQuestion.val() === "question3"){
		displayedQuestion.val("question4");
		displayedQuestion.text(questions.question4);
		q1.text(question4.option1);
		q2.text(question4.option2);
		q3.text(question4.option3);
		q4.text(question4.option4);
	}
	if (displayedQuestion.val() === "question4"){
		displayedQuestion.val("question5");
		displayedQuestion.text(questions.question5);
		q1.text(question5.option1);
		q2.text(question5.option2);
		q3.text(question5.option3);
		q4.text(question5.option4);
	}
}