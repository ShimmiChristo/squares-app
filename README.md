# Squares App Development

## About Squares Game
The Squares App is a game, commonly known as football squares or squares game. 
The game consists of a grid of 100 columns and 10 rows, 2 sports teams, and X amount of users. 

One team is assigned to the columns and one team is assigned to the rows. Each column is randomly assigned a number 0 through 9. Each row is
randomly assigned a number 0 through 9. Assign each cell a user's name. 

After all the cells have been filled with users, wait for the games to be played. 

The last digit of team X's score (the team of the columns) and the last digit of team Y's score (the team of the rows) determines the winning cell. 

Depending on the preference of the group, the winning numbers can be at the end of periods, quarters, and/or games. 


## NCAA Tournament Scores API

NCAA does not provide an open source API, so I created my own. I created a webpage scraper to pull the data, parse it and render the array of objects. The array is hosted on 
using node/express. 

The URL I used to scrape the scores - [2019 Mens NCAA Official Bracket](https://www.ncaa.com/brackets/basketball-men/d1/2019)

## Running the tests

```
node server.js
ng serve
```

## Built With

* [AWS](https://aws.amazon.com/) - Hosts the production site. 
* [TypeScript](https://github.com/microsoft/TypeScript) - Compiles to readable, standards-based JavaScript. Standard for Angular CLI. 
* [Angular CLI](https://cli.angular.io/) - Development tool and library specialized for Angular.
* [NodeJS](https://github.com/nodejs/node) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://github.com/expressjs/express) - Web framework for node.
* [request-promise](https://github.com/request/request-promise) - A simplified HTTP request with Promise support. Used to scrape the HTML from a URL.  
* [cheerio](https://github.com/cheeriojs/cheerio) - jQuery designed specifically for the server. Used to parse the HTML. 
