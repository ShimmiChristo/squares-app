// winnersRoutes.js

var express = require('express');
var app = express();
var winnersRoutes = express.Router();

// Require Item model in our routes module
var Winningnumbers = require('../models/Winningnumbers');

// var gameTwo = new Winningnumbers({ id: 5, user: 'Mat5t', teamY: 0, teamX: 1 });
// gameTwo.save(function (err) {
//   if (err) { return handleError(err) }
//   else { console.log('Winningnumbers was saved!'); }
// });

// Defined store route
winnersRoutes.route('/add').post(function (req, res) {
  var game = new Winningnumbers(req.body);
   game.save()
    .then(item => {
    res.status(200).json(game);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
winnersRoutes.route('/').get(function (req, res) {
  // res.send('You requested to see all winningnumbers');

  Winningnumbers.find(function (err, winningnumbers){
    if(err){
      console.log(err);
    }
    else {
      res.json(winningnumbers);
    }
  });
});

// Get Game Id
winnersRoutes.route('/:id').get(function (req, res) {
  var id = req.params.id;
  // res.send('You requested to edit coin with id of ' + req.params.id);

  Winningnumbers.findById(id, function (err, game){
      res.json(game);
  });
});

// Defined edit route
winnersRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  res.send('You requested to edit game with id of ' + req.params.id);

  Winningnumbers.findById(id, function (err, game){
      res.json(game);
  });
});

//  Defined update route
winnersRoutes.route('/update/:id').post(function (req, res) {
    Winningnumbers.findById(req.params.id, function(err, coin) {
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
winnersRoutes.route('/delete/:id').delete(function (req, res) {
    Winningnumbers.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = winnersRoutes;