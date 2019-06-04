
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/db'),
    gameRoutes = require('./expressRoutes/gameRoutes'),
    ncaaGameRoutes = require('./expressRoutes/ncaaGameRoutes'),
    squaresRoutes = require('./expressRoutes/squaresRoutes'),
    winnersRoutes = require('./expressRoutes/winnersRoutes');


    mongoose.Promise = global.Promise;
        mongoose.connect(config.DB, {useNewUrlParser: true} ).then(
        () => {console.log('Database is connected') },
        err => { console.log('Cannot connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 8080;

    app.use('/api/games', gameRoutes);
    app.use('/api/ncaa', ncaaGameRoutes);
    app.use('/api/squares', squaresRoutes);
    app.use('/api/winners', winnersRoutes);

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });
