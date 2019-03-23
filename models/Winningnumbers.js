var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var winnersResultsSchema = new Schema({
  game: {
    type: Number
  },
  user: {
    type: String
  }, 
  teamY: {
    type: Number
  },
  teamX: {
    type: Number
  }
}, {
  collection: 'winningnumbers'
});

// 'Coin' is the db collection and it's going to base it
//  on the Coin Schema

var Winningnumbers = mongoose.model('Winningnumbers', winnersResultsSchema);
module.exports = Winningnumbers;
