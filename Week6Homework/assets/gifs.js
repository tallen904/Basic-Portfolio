var gifs = [];

function displayGifs(){
	var animal = this.dataset.name;
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=3";
	var settings = {
		url: queryURL,
		method: "GET"
	}
// 	var animalGifDisplay = $("<div>");
// 	animalGifDisplay.addClass("gifDisplay");

// 	$.ajax(settings)
// 	.done(function(json){
// 		console.log(json);
// 		var results = json.data;
// 		for (var i = 0; i < results.length; i++){
// 			$("#gifsDiv").append(animalGifDisplay);
// 			var p = $("<p>");
// 			p.text("Rating: " + results[i].rating);
// 			var animalImage = $("<img>");
// 			animalImage.addClass("state");
// 			animalImage.addClass("col-lg-4");
// 			animalImage.attr("data-still", results[i].images.fixed_height_still.url);
// 			animalImage.attr("data-animate", results[i].images.fixed_height.url);
// 			animalImage.attr("data-state", "still");
// 			animalImage.attr("src", results[i].images.fixed_height_still.url);
// 			animalGifDisplay.append(p);
// 			animalGifDisplay.append(animalImage);
// 		}
// 	})
// }

	var animalGifDisplay = $("<div>");
	animalGifDisplay.addClass("gifDisplay");


	$.ajax(settings)
	.done(function(json){
		console.log(json);
		var results = json.data;
		for (var i = 0; i < results.length; i++){
			var gifContent = $("<div>");
			$("#gifsDiv").append(animalGifDisplay);
			var p = $("<p>");
			p.text("Rating: " + results[i].rating);
			var animalImage = $("<img>");
			animalImage.addClass("state");
			gifContent.addClass("col-lg-3");
			gifContent.addClass("gifContentDiv")
			animalImage.attr("data-still", results[i].images.fixed_height_still.url);
			animalImage.attr("data-animate", results[i].images.fixed_height.url);
			animalImage.attr("data-state", "still");
			animalImage.attr("src", results[i].images.fixed_height_still.url);
			gifContent.append(p);
			gifContent.append(animalImage);
			animalGifDisplay.append(gifContent);
		}
	})
}

function renderButtons(){
	$("#buttonsDiv").empty();
    for (var i = 0; i < gifs.length; i++) {
    	var a = $("<button>");
        a.addClass("gif");
        a.addClass("btn");
        a.attr("data-name", gifs[i]);
        a.text(gifs[i]);
        $("#buttonsDiv").append(a);
        }
};

function stateFunc(){
	var state = $(this).attr("data-state");
	if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
}

$("#addGif").on("click", function(event) {
        event.preventDefault();
        var animal = $("#gifInput").val().trim().toUpperCase();
        gifs.push(animal);
        renderButtons();
      });

$(document).on("click", ".gif", displayGifs);
$(document).on("click", ".state", stateFunc)
// $(document).on("click", ".play", )

renderButtons();