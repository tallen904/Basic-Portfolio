const connection = require("./connection.js");

const orm = {
	selectAll: function(table, func){
		const queryString = ('SELECT * FROM ??');

		connection.query(queryString, [table], function(err, result){
			if(err) throw err
			func(result)
		})
	},
	eatBurger: function(table, itemId, eaten, onResult){
		const queryString = ('UPDATE ?? SET ?? = ? WHERE id = ?')

		connection.query(queryString, [table, eaten, true, itemId], function(err, result){
			if(err) throw err
			onResult(err, result)
		})
	},
	createBurger: function(table, col1, col2, col1Val, func){
		const queryString = (`INSERT INTO ?? (??, ??) VALUES (?, ${false});`)

		connection.query(queryString, [table, col1, col2, col1Val], function(err, result){
			if(err) throw err
			func(result)
		})
	}
}

module.exports = orm;