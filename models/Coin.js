var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var coinSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'coins'
});

// 'Coin' is the db collection and it's going to base it
//  on the Coin Schema
var Coin = mongoose.model('Coin', coinSchema);
module.exports = Coin;


