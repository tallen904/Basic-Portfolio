const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require("express-handlebars");
const methodOverride = require('method-override')
const orm = require('./config/orm.js')
const burger = require('./models/burger.js')

const app = express();
const port = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Display page
app.get('/', (req, res) => {
	res.render('index')
})

// Burgers JSON
app.get('/api/burgers', (req, res) => {
	orm.selectAll('burgers', function(result){
		res.json(result)
	})
})

// Add new item
app.post('/api/burgers', (req, res) => {
	burger.createBurger(req.body.burger, function(err, data){
		if (err) { return res.status(500).end(); }

   		res.json({ id: data.insertId });
	})
})

app.put('/api/burgers/:id', (req, res) => {
	orm.eatBurger('burgers', req.params.id, 'eaten', function(err, data){
		if (err) { return res.status(500).end() }

    	if (data.changedRows === 0) {
     	// If no rows were changed, then the ID must not exist, so 404
      	return res.status(404).end();
    }

    	res.status(200).end();
	})
})





app.listen(port, function(){
	console.log(`App listening on port: ${port}`)
})