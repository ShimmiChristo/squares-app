var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameResultsSchema = new Schema({
  game: {
    type: Number
  },
  date: {
    type: String
  },
  winner: {
    type: String
  }, 
  winningScore: {
    type: String
  },
  loser: {
    type: String
  }, 
  losingScore: {
    type: String
  }
}, {
  collection: 'gameresults'
});

// 'Coin' is the db collection and it's going to base it
//  on the Coin Schema

var Gameresults = mongoose.model('Gameresults', gameResultsSchema);
module.exports = Gameresults;
