// ***********************************************************************
// variables
// ***********************************************************************
require('dotenv').config();
const keys = require("./keys.js");
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);
const request = require('request');
const fs = require('fs');

const command = process.argv[2];
var extraParam = process.argv.slice(3).join(" ");

// ***********************************************************************
// my-tweets command
// ***********************************************************************

if (command === "my-tweets"){
	client.get("statuses/user_timeline", function(error, tweets, response){
		if (error) {
			console.log(error)
			logData(error);
		}
		tweets.forEach(function(tweet){
			console.log(tweet.text)
			console.log("Date Tweeted: " + tweet.user.created_at)
			console.log("=======================================================")
			logData(tweets);
		})
	})
}

// ***********************************************************************
// spotify-this-song command
// ***********************************************************************

if (command === "spotify-this-song"){
	if (!extraParam){
		extraParam = "The Sign"
	}
	spotify.search({
		type: "track",
		query: extraParam,
		limit: 3
	}, function(err, data){
		if (err) {
			console.log(err)
			logData(err);
		}
		logData(data);
		console.log("Song Name: " + extraParam)
		var songLink = (JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2));
		console.log("Link to track on Spotify: " + songLink);
		var artist = (JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
		console.log("Artist: " + artist);
		var album = (JSON.stringify(data.tracks.items[0].album.name, null, 2));
		console.log("Album: " + album);
	})
}

// ***********************************************************************
// movie-this command
// ***********************************************************************

if (command === "movie-this"){
	if (!extraParam){
		extraParam = "Mr. Nobody"
	}
	request.get({url: "http://www.omdbapi.com/?apikey=trilogy&t=" + extraParam}, function(err, response, body){
		if (err){
			console.log(err);
			logData(err);
		}
		var jsonResponse = JSON.parse(body)
		console.log("Movie Title: " + jsonResponse.Title)
		console.log("Year: " + jsonResponse.Year)
		console.log("IMDB Rating: " + jsonResponse.Ratings[0].Value)
		console.log("Rotten Tomatoes Rating: " + jsonResponse.Ratings[1].Value)
		console.log("Country: " + jsonResponse.Country)
		console.log("Language: " + jsonResponse.Language)
		console.log("Plot: " + jsonResponse.Plot)
		console.log("Actors: " + jsonResponse.Actors)
		logData(body);
	})
}


// ***********************************************************************
// do-what-it-says command
// ***********************************************************************

if (command === "do-what-it-says"){
	fs.readFile('./random.txt', "utf8", function(error, data){
		if (error){
			throw error;
			logData(error);
		}
		var dataArr = data.split(",");
		if (dataArr[0] === "my-tweets"){
			client.get("statuses/user_timeline", function(error, tweets, response){
			if (error) {
				console.log(error)
				logData(error)
			}
			tweets.forEach(function(tweet){
				console.log(tweet.text)
				console.log("Date Tweeted: " + tweet.user.created_at)
				console.log("=======================================================")
				logData(tweets);
		})
	})
		}
		if (dataArr[0] === "spotify-this-song"){
			var input = dataArr[1];
			if (!dataArr[1]){
				input = "The Sign"
			}
			spotify.search({
				type: "track",
				query: input,
				limit: 3
			}, function(err, data){
				if (err) {
					console.log(err)
					logData(err);
				}
				console.log("Song Name: " + input)
				var songLink = (JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2));
				console.log("Link to track on Spotify: " + songLink);
				var artist = (JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
				console.log("Artist: " + artist);
				var album = (JSON.stringify(data.tracks.items[0].album.name, null, 2));
				console.log("Album: " + album);
				logData(data);
			})
		}
		if (dataArr[0] === "movie-this"){
			if (!extraParam){
				extraParam = "Mr. Nobody"
			}
		request.get({url: "http://www.omdbapi.com/?apikey=trilogy&t=" + extraParam}, function(err, response, body){
			if (err){
				console.log("Error: " + response.statusCode)
				logData(err);
			}
			var jsonResponse = JSON.parse(body)
			console.log("Movie Title: " + jsonResponse.Title)
			console.log("Year: " + jsonResponse.Year)
			console.log("IMDB Rating: " + jsonResponse.Ratings[0].Value)
			console.log("Rotten Tomatoes Rating: " + jsonResponse.Ratings[1].Value)
			console.log("Country: " + jsonResponse.Country)
			console.log("Language: " + jsonResponse.Language)
			console.log("Plot: " + jsonResponse.Plot)
			console.log("Actors: " + jsonResponse.Actors)
			logData(body);
			})
		}
	})
}

// ***********************************************************************
// log.txt
// ***********************************************************************

function logData(data){
	fs.appendFile("./log.txt", ", \n" + data, function(err){
	if (err){
		throw err
	} else {
		console.log("Data added to log.txt");
	}
})
}