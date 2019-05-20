// squaresRoutes.js

var express = require('express');
var app = express();
var squaresRoutes = express.Router();

// Require Item model in our routes module
var Squareresults = require('../models/Squareresults');

var gameTwo = new Squareresults({ id: 5, user: 'Mat5t', teamY: 0, teamX: 1 });
// gameTwo.save(function (err) {
//   if (err) { return handleError(err) }
//   else { console.log('Squareresults was saved!'); }
// });

// Defined store route
squaresRoutes.route('/add').post(function (req, res) {
  var game = new Squareresults(req.body);
   game.save()
    .then(item => {
    res.status(200).json(game);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
squaresRoutes.route('/').get(function (req, res) {
  // res.send('You requested to see all squareresults');

  Squareresults.find(function (err, squareresults){
    if(err){
      console.log(err);
    }
    else {
      res.json(squareresults);
    }
  });
});

// Get Game Id
squaresRoutes.route('/:id').get(function (req, res) {
  var id = req.params.id;
  // res.send('You requested to edit coin with id of ' + req.params.id);

  Squareresults.findById(id, function (err, game){
      res.json(game);
  });
});

// Defined edit route
squaresRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  res.send('You requested to edit game with id of ' + req.params.id);

  Squareresults.findById(id, function (err, game){
      res.json(game);
  });
});

//  Defined update route
squaresRoutes.route('/update/:id').put(function (req, res) {
    Squareresults.findById(req.params.id, function(err, square) {
    if (!square)
      return next(new Error('Could not load Document'));
    else {
      square.user = req.body.user;
      square.teamY = req.body.teamY;
      square.teamX = req.body.teamX;
      square.money = req.body.money;

      square.save().then(square => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
squaresRoutes.route('/delete/:id').delete(function (req, res) {
    Squareresults.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = squaresRoutes;