// Requires

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

let users = [
	{
		name: 'Fluffy',
		image: '',
		results: [5, 2, 3, 4, 2, 1, 3, 5, 4, 1]
	},
	{
		name: 'Kitty',
		image: '',
		results: [3, 4, 5, 5, 3, 5, 4, 4, 5, 4]
	}
]

let newUser;


// Routes

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/survey/users', (req, res) => {
	res.json(users)
})

app.get('/survey', (req, res) => {
	res.sendFile(path.join(__dirname, 'survey.html'))
})

app.post('/survey', (req, res) => {
	const user = req.body;

	console.log(user);

	newUser = user;
})

app.listen(port, () => {
	console.log(`App listening on port: ${port}.`)
})