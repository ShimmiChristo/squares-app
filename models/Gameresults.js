var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameResultsSchema = new Schema({
  _id: String, 
  teamOne: Number, 
  teamTwo: Number
}, {
  collection: 'gameresults'
});

// 'Coin' is the db collection and it's going to base it
//  on the Coin Schema

var Gameresults = mongoose.model('Gameresults', gameResultsSchema);
module.exports = Gameresults;