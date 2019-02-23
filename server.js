const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const express = require('express'),
//       path = require('path'),
//       bodyParser = require('body-parser'),
//       cors = require('cors'),
//       mongoose = require('mongoose'),
//       config = require('./config/DB');

//       mongoose.Promise = global.Promise;
//       mongoose.connect(config.DB).then(
//           () => {console.log('Database is connected') },
//           err => { console.log('Can not connect to the database'+ err)}
//         );

//       const app = express();
//       app.use(bodyParser.json());
//       app.use(cors());
//       const port = process.env.PORT || 4000;

//        const server = app.listen(port, function(){
//          console.log('Listening on port ' + port);
//        });