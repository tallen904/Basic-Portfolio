const mysql = require('mysql');
const inquirer = require('inquirer');
var quant;
var itemId

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "root",
	database: "bamazon_DB"
});

// Function that displays all items, will run on application startup
function displayAllItems(){
		connection.query('SELECT * FROM products', function(err, result){
		if(err) throw err
		result.forEach(function(item){
			console.log("Product ID: " + item.id)
			console.log("Product Name: " + item.product_name)
			console.log("Department: " + item.department_name)
			console.log("Price: " + item.price)
			console.log("Current Stock: " + item.quantity)
			console.log("===========================")
		})
	})
}

function showCost(item, quantity){
	connection.query('SELECT * FROM products WHERE id=?', [item], function(err, result){
		if(err) throw err
		costPerItem = result[0].price
		totalCost = parseInt(costPerItem * quantity)
		console.log(`Total cost: $${totalCost}`)
	})
}

function getQuantity(item, amountToSubtract){
	connection.query('SELECT * FROM products WHERE id=?', [item], function(err, result){
		if(err) throw err
		quant = result[0].quantity - amountToSubtract
		console.log(`Remaining stock: ${quant}`)
		showCost(itemId, amountToSubtract)
		if(quant < 0){
			console.log('Insufficient Quantity!')
			setTimeout(buyMore, 1000)
		} else{
			updateQuantity(itemId, quant)
		}
	})
}

function updateQuantity(item, newQuantity){
	connection.query('UPDATE products SET ? WHERE ?',
		[
			{
				quantity: newQuantity
			},
			{
				id: item
			}
		],
		function(err, result){
			if(err) throw err
			console.log('Inventory updated')
		}
		)
		setTimeout(buyMore, 1000)
}

function userPrompt(){
	inquirer.prompt([
			{
				name: 'item',
				message: 'Enter the ID of the product you would like to purchase'
			},
			{
				name: 'quantity',
				message: 'Enter the quantity of the item you would like to purchase'
			}
		])
		.then(function(response){
			itemId = response.item
			getQuantity(response.item, response.quantity)
		})
}

function buyMore(){
	inquirer.prompt([
			{
				name: 'more',
				message: 'Would you like to purchase something else?',
				type: 'confirm'
			}
		]).then(function(response){
			if(response.more){
				userPrompt()
			} else {
				connection.end()
			}
		})
}


connection.connect(function(err){
	if(err) throw err
	console.log('Connect as id '+ connection.threadID)
	displayAllItems()
	setTimeout(userPrompt, 1000)
})