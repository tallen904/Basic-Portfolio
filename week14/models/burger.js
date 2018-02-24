// responsible for everything that has to do with a 'plan'
const orm = require('../config/orm.js');

// creating a plan...

// a specific way of manipulating the db, but doesn't make SQL queries itself, 
// instead it uses the orm. All logic should go here.
const burger = {

  selectAll: function(callback) {
    orm.selectAll('burgers', callback);
  },

  createBurger: function(burgerText, callback) {
    orm.createBurger('burgers', 'burger', 'eaten', burgerText, callback);
  },

  eatBurger: function(id, callback) {
    orm.eatBurger('burgers', 'eaten', id, callback);
  }

}

module.exports = burger;