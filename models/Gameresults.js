var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameResultsSchema = new Schema({
  game: {
    type: Number
  },
  teamOne: {
    type: Number
  }, 
  teamTwo: {
    type: Number
  }
}, {
  collection: 'gameresults'
});

// 'Coin' is the db collection and it's going to base it
//  on the Coin Schema

var Gameresults = mongoose.model('Gameresults', gameResultsSchema);
module.exports = Gameresults;
