function displayBurgers(){
	$('.leftDiv').empty()
	$.get('/api/burgers', function(data){
		data.forEach( burger => {
			if(!burger.eaten){
				let newDiv = $('<div>');
				let btn = $('<button>');
				let id = $('<p>');
				let burgerName = $('<p>');
				btn.data('id', burger.id)
				burgerName.addClass('burgerName')
				burgerName.text(burger.burger)
				id.text(burger.id)
				btn.text('Devour');
				newDiv.addClass('burgerDiv')
				newDiv.append(id)
				newDiv.append(burgerName);
				newDiv.append(btn)
				$('.leftDiv').append(newDiv)
			}
			else{
				let newDiv = $('<div>');
				newDiv.text(burger.burger);
				$('.rightDiv').append(newDiv)
			}			
		})
	})
}

$('.leftDiv').on('click', 'button', function(){

	var id = $(this).data('id')
	var eaten = {
		eaten: true
	}

	$.ajax(`/api/burgers/${id}`, {
		type: "PUT",
		data: eaten
	}).then(function(){
		console.log('Eaten!!!')
		location.reload()
	})

	$(this).parent().remove()

})

$('#submitBurger').on('click', function(e){
	e.preventDefault();
	var newBurger = {
      burger: $("#burgerName").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
	// displayBurgers();
})


displayBurgers();