var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var squaresResultsSchema = new Schema({
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
  collection: 'squaresresults'
});


var Squareresults = mongoose.model('Squareresults', squaresResultsSchema);
module.exports = Squareresults;
