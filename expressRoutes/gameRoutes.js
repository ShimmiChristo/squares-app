// gameRoutes.js

var express = require('express');
var app = express();
var gameRoutes = express.Router();

// Require Item model in our routes module
var Gameresults = require('../models/Gameresults');

// var gameTwo = new Gameresults({game: 1, teamOne: 100, teamTwo: 99});
// gameTwo.save(function (err) {
//   if (err) { return handleError(err) }
//   else { console.log('Gameresults was saved!'); }
// });

// Defined store route
gameRoutes.route('/add').post(function (req, res) {
  var game = new Gameresults(req.body);
   game.save()
    .then(item => {
    res.status(200).json(game);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
gameRoutes.route('/').get(function (req, res) {
  // res.send('You requested to see all gameresults');

  Gameresults.find(function (err, gameresults){
    if(err){
      console.log(err);
    }
    else {
      res.json(gameresults);
    }
  });
});

// Get Game Id
gameRoutes.route('/:id').get(function (req, res) {
  var id = req.params.id;
  // res.send('You requested to edit coin with id of ' + req.params.id);

  Gameresults.findById(id, function (err, game){
      res.json(game);
  });
});

// Defined edit route
gameRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  res.send('You requested to edit game with id of ' + req.params.id);

  Gameresults.findById(id, function (err, game){
      res.json(game);
  });
});

//  Defined update route
gameRoutes.route('/update/:id').post(function (req, res) {
    Gameresults.findById(req.params.id, function(err, coin) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      coin.name = req.body.name;
      coin.price = req.body.price;

      coin.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
gameRoutes.route('/delete/:id').delete(function (req, res) {
    Gameresults.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = gameRoutes;