// Check off specific todos by clicking

// All of this is unnecessary, it can be done much more easily with toggleClass()

// $("li").on("click", function(){
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		// turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	} 
// 	// else
// 	else {
// 		// turn it gray
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// 	}
// });

// Can only add listeners on elements that exist the first time code is run,
// even with using on(). So, the <ul> will always exist so we make the 
// .on() event target that
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})

// event.stopPropagation prevents 'event bubbling', where events on every element that 
// the element is inside will fire. The .parent needs to be on there to make clicking the
// X delete the <li> that the <span> is attached to, instead of just deleting the <span>
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").on("keypress",function(event){
	// Tracks when the 'Enter' key is pressed (13 is the key code for Enter)
	if(event.which === 13){
		// Grabs new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		// append takes a string of html (not just text, you can use html tags)
		// and adds it on to another element
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
})