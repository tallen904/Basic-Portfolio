// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzFKjUBPw4CuJy5nM2xh-rl0V_kM6HEu0",
    authDomain: "rock-paper-scissors-c62b8.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-c62b8.firebaseio.com",
    projectId: "rock-paper-scissors-c62b8",
    storageBucket: "rock-paper-scissors-c62b8.appspot.com",
    messagingSenderId: "260506878077"
  };

firebase.initializeApp(config);

var database = firebase.database();

var active;
var playerOneData;
var playerTwoData;

var connectionsRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snapshot){
	if (snapshot.val()){
		var con = connectionsRef.push(true);
		con.onDisconnect().remove();
	}
})

database.ref("PlayerOne").on("value", function(snapshot){
	playerOneData = snapshot.val();
	console.log(playerOneData);
	console.log(snapshot.key)
})

database.ref("PlayerTwo").on("value", function(snapshot){
	playerTwoData = snapshot.val();
	console.log(playerTwoData)
})

database.ref("PlayerActive").on("value", function(snapshot){
	active = snapshot.val();
})

var playerName;
var wins = 0;
var losses = 0;



// database.ref("NewPlayer").push({
// 	name: playerName,
// 	wins: wins,
// 	losses: losses
// })


// database.ref().on("child_added", function(snapshot, prevChildKey){
// 	var player = snapshot.val();

// })



$("#players").hide();

$("#playerNameEntry").on("click", function(e){
	e.preventDefault();
	if (!active.active){
		database.ref("PlayerActive").update({
			active: true
		})
		playerName = $("#playerName").val();
		$("#playerOneName").text(playerName);
		$("#players").show();
		$("#playerOneBtns").show();
		$("#playerTwoBtns").hide();
		database.ref("PlayerOne").set({
			name: playerName,
			wins: wins,
			losses: losses,
			active: true
		})
	} else if (active.active) {
		playerName = $("#playerName").val();
		$("#playerTwoName").text(playerName);
		$("#players").show();
		$("#playerTwoBtns").show();
		$("#playerOneBtns").hide();
		database.ref("PlayerTwo").set({
			name: playerName,
			wins: wins,
			losses: losses,
			active: true
		})
	}
})

setTimeout(function(){
	$("#playerTwoName").show()
	$("#playerTwoName").text(playerTwoData.name)
	$("#playerOneName").show()
	$("#playerOneName").text(playerOneData.name)
}, 3000);

// $("#playerNameEntry").on("click", function(e){
// 	e.preventDefault();
// 	if (playerOneActive){
// 		playerTwoActive = true;
// 		playerTwoName = $("#playerName").val();
// 		$("#players").show();
// 	} else {
// 		playerOneActive = true;
// 		playerOneName = $("#playerName").val();
// 		$("#players").show();
// 	}
// })


// Variables


// var playerOneWins = playerOneData.wins;

var playerOneGuess;
var playerTwoGuess;

var p1Rock = $("#playerOneRock");
var p1Paper = $("#playerOnePaper");
var p1Scissors = $("#playerOneScissors");
var p2Rock = $("#playerTwoRock");
var p2Paper = $("#playerTwoPaper");
var p2Scissors = $("#playerTwoScissors");

// $("#p1WinLoss").text("Wins: " + playerOneData.wins + " Losses: " + playerOneData.losses)
// $("#p2WinLoss").text("Wins: " + playerTwoWins + " Losses: " + playerTwoLosses)



// Code

p1Rock.on("click", function(){
	playerOneGuess = p1Rock.val();
	$("#playerOneBtns").hide();
	playerTwoTurn();
})
p1Paper.on("click", function(){
	playerOneGuess = p1Paper.val();
	$("#playerOneBtns").hide();
	playerTwoTurn();
})
p1Scissors.on("click", function(){
	playerOneGuess = p1Scissors.val();
	$("#playerOneBtns").hide();
	playerTwoTurn();
})
p2Rock.on("click", function(){
	playerTwoGuess = p2Rock.val();
	outcome();
})
p2Paper.on("click", function(){
	playerTwoGuess = p2Paper.val();
	outcome();
})
p2Scissors.on("click", function(){
	playerTwoGuess = p2Scissors.val();
	outcome();
})

function playerTwoTurn(){
	$("#playerTwoBtns").show();
}

function outcome(){
	if ((playerOneGuess === "rock" && playerTwoGuess === "scissors") || (playerOneGuess === "paper" && playerTwoGuess === "rock") || (playerOneGuess === "scissors" && playerTwoGuess === "paper")){
		wins++;
		resetGame();
	} else if ((playerOneGuess === "rock" && playerTwoGuess === "paper") || (playerOneGuess === "paper" && playerTwoGuess === "scissors") || (playerOneGuess === "scissors" && playerTwoGuess === "rock")){
		playerOneLosses++;
		playerTwoWins++;
		resetGame();
	} else {
		resetGame();
	}	
}

function resetGame(){
	$("#playerTwoBtns").hide();
	$("#playerOneBtns").show();
	$("#p1WinLoss").text("Wins: " + playerOneData.wins + " Losses: " + playerOneData.losses);
	$("#p2WinLoss").text("Wins: " + playerTwoData.wins + " Losses: " + playerTwoData.losses);
	database.ref("PlayerOne").update({
		wins: wins
	})
}

// Chat

var me = {};
me.avatar = playerOneName;

var you = {};
you.avatar = playerTwoName;

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}            

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());
    
    if (who == "me"){
        
        control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><p>' + me.avatar + '</p></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';                    
    } else{
        control = '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
                                '<p>'+text+'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
            $("ul").append(control);

        }, time);
    
}

function resetChat(){
    $("ul").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);              
            $(this).val('');
        }
    }
});

//-- Clear Chat
resetChat();

//-- NOTE: No use time on insertChat.