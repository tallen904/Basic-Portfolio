// variables

var character;
var enemy;
var enemies = 3;
var saberClash = document.createElement("audio");
saberClash.setAttribute("src", "./assets/saberClash.mp3")
var saberOn = document.createElement("audio");
saberOn.setAttribute("src", "./assets/saberOn.mp3")

// Obi Wan
var kenobi = {
	name: "Obi Wan Kenobi",
	health: 175,
	startingAttackPower: 8,
	currentAttackPower: 8,
	counterAttackPower: 12,
};
// Jar Jar Binks
var binks = {
	name: "Jar Jar Binks",
	health: 185,
	startingAttackPower: 5,
	currentAttackPower: 5,
	counterAttackPower: 15
};

// Darth Vader
var vader = {
	name: "Darth Vader",
	health: 200,
	startingAttackPower: 7,
	currentAttackPower: 7,
	counterAttackPower: 10
};

// General Grevious
var grevious = {
	name: "General Grevious",
	health: 125,
	startingAttackPower: 10,
	currentAttackPower: 10,
	counterAttackPower: 18
};

function attackFunc(){
	character.health -= enemy.counterAttackPower;
	enemy.health -= character.currentAttackPower;
	character.currentAttackPower += character.startingAttackPower;
	$("#currentEnemyHealth").text(enemy.health);
	$(".characterHealth").text(character.health);
	$("#outgoingDamageLog").text("You dealt " + character.currentAttackPower + " damage to: " + enemy.name)
	$("#incomingDamageLog").text(enemy.name +  " dealt " + enemy.counterAttackPower + " damage to you!")
	console.log(character.health, enemy.health);
	if (character.health <= 0){
		gameOver();
	} else if (enemy.health <= 0){
		alert("Choose your next opponent!");
		$("#currentEnemy").empty();
		enemies--;
		if (enemies === 0){
			winner();
		}
	} else {
		console.log("Star Wars!");
	}
	if (character.health <= 0 || enemy.health <= 0){
		return;
	}
};

function winner(){
	alert("The galaxy is yours!")
};

function gameOver(){
	alert("You have been defeated!")
};

$("#attackBtn").on("click", function(){
	attackFunc();
	saberClash.play();
});

$("#obiWan").on("click", function(){
	character = kenobi;
	saberOn.play();
	$("#jarJarBinks").remove();
	$("#darthVader").remove();
	$("#generalGrevious").remove();
	$("#kenobiEnemy").remove();
	$("#binksEnemy").append('<img src="./assets/images/jarjarbinks.jpg">').addClass("binksDiv");
	$("#vaderEnemy").append('<img src="./assets/images/vader.jpg">').addClass("vaderDiv");
	$("#greviousEnemy").append('<img src="./assets/images/grevious.jpeg">').addClass("greviousDiv");
});

$("#jarJarBinks").on("click", function(){
	character = binks;
	saberOn.play();
	$("#obiWan").remove();
	$("#darthVader").remove();
	$("#generalGrevious").remove();
	$("#binksEnemy").remove();
	$("#kenobiEnemy").append('<img src="./assets/images/obiwan.jpg">').addClass("kenobiDiv");
	$("#vaderEnemy").append('<img src="./assets/images/vader.jpg">').addClass("vaderDiv");
	$("#greviousEnemy").append('<img src="./assets/images/grevious.jpeg">').addClass("greviousDiv");
});

$("#darthVader").on("click", function(){
	character = vader;
	saberOn.play();
	$("#obiWan").remove();
	$("#jarJarBinks").remove();
	$("#generalGrevious").remove();
	$("#vaderEnemy").remove();
	$("#binksEnemy").append('<img src="./assets/images/jarjarbinks.jpg">').addClass("binksDiv");
	$("#kenobiEnemy").append('<img src="./assets/images/obiwan.jpg">').addClass("kenobiDiv");
	$("#greviousEnemy").append('<img src="./assets/images/grevious.jpeg">').addClass("greviousDiv");
});

$("#generalGrevious").on("click", function(){
	character = grevious;
	saberOn.play();
	$("#obiWan").remove();
	$("#jarJarBinks").remove();
	$("#darthVader").remove();
	$("#greviousEnemy").remove();
	$("#binksEnemy").append('<img src="./assets/images/jarjarbinks.jpg">').addClass("binksDiv");
	$("#vaderEnemy").append('<img src="./assets/images/vader.jpg">').addClass("vaderDiv");
	$("#kenobiEnemy").append('<img src="./assets/images/obiwan.jpg">').addClass("kenobiDiv");
});

$("#kenobiEnemy").on("click", function(){
	enemy = kenobi;
	$("#kenobiEnemy").remove();
	$("#currentEnemy").append('<img src="./assets/images/obiwan.jpg">');
	$("#currentEnemyHealth").text(kenobi.health);
});

$("#binksEnemy").on("click", function(){
	enemy = binks;
	$("#binksEnemy").remove();
	$("#currentEnemy").append('<img src="./assets/images/jarjarbinks.jpg">');
	$("#currentEnemyHealth").text(binks.health);
});

$("#vaderEnemy").on("click", function(){
	enemy = vader;
	$("#vaderEnemy").remove();
	$("#currentEnemy").append('<img src="./assets/images/vader.jpg">');
	$("#currentEnemyHealth").text(vader.health);
});

$("#greviousEnemy").on("click", function(){
	enemy = grevious;
	$("#greviousEnemy").remove();
	$("#currentEnemy").append('<img src="./assets/images/grevious.jpeg">');
	$("#currentEnemyHealth").text(grevious.health);
});

// function charSelect(){
// 	if (character = kenobi){
// 		saberOn.play();
// 		$("#jarJarBinks").remove();
// 		$("#darthVader").remove();
// 		$("#generalGrevious").remove();
// 		$("#kenobiEnemy").remove();
// 		$("#binksEnemy").append('<img src="./assets/images/jarjarbinks.jpg">');
// 		$("#vaderEnemy").append('<img src="./assets/images/vader.jpg">');
// 		$("#greviousEnemy").append('<img src="./assets/images/grevious.jpeg">');
// 	} else if (character = binks){
// 		saberOn.play();
// 		$("#obiWan").remove();
// 		$("#darthVader").remove();
// 		$("#generalGrevious").remove();
// 		$("#binksEnemy").remove();
// 		$("#kenobiEnemy").append('<img src="./assets/images/obiwan.jpg">');
// 		$("#vaderEnemy").append('<img src="./assets/images/vader.jpg">');
// 		$("#greviousEnemy").append('<img src="./assets/images/grevious.jpeg">');
// 	} else if (character = vader){
// 		saberOn.play();
// 		$("#obiWan").remove();
// 		$("#jarJarBinks").remove();
// 		$("#generalGrevious").remove();
// 		$("#vaderEnemy").remove();
// 		$("#binksEnemy").append('<img src="./assets/images/jarjarbinks.jpg">');
// 		$("#kenobiEnemy").append('<img src="./assets/images/obiwan.jpg">');
// 		$("#greviousEnemy").append('<img src="./assets/images/grevious.jpeg">');
// 	} else {
// 		saberOn.play();
// 		$("#obiWan").remove();
// 		$("#jarJarBinks").remove();
// 		$("#darthVader").remove();
// 		$("#greviousEnemy").remove();
// 		$("#binksEnemy").append('<img src="./assets/images/jarjarbinks.jpg">');
// 		$("#vaderEnemy").append('<img src="./assets/images/vader.jpg">');
// 		$("#kenobiEnemy").append('<img src="./assets/images/obiwan.jpg">');
// 	}
// }

	