# Squares App Development

The Squares App is a game, commonly known as football squares or squares game. 
The game consists of a grid of 100 columns and 10 rows, 2 sports teams, and X amount of users. 

One team is assigned to the columns and one team is assigned to the rows. Each column is randomly assigned a number 0 through 9. Each row is
randomly assigned a number 0 through 9. Assign each cell a user's name. 

After all the cells have been filled with users, we now wait for the games to be played. 

The last digit of team X's score (the team of the columns) and the last digit of team Y's score (the team of the rows) determines the winning cell. 

Depending on the preference of the group, the winning numbers can be at the end of periods, quarters, and/or games. 

The squares game is the popular games during the Super Bowl. There are two teams and a grid of 10 rows by 10 columns. 

During the Super Bowl, the squares game is very popular. 
During the NCAA basketball tournament, I want to know the scores of each games. Since NCAA.com does not have an open source API, I decided to scrape the data from their site. 

Using this data, I can create a website or web app. Since I am pulling the data dynamically, I do not have to update the database after every game.


The URL I used to scrape the scores - [2019 Mens NCAA Official Bracket](https://www.ncaa.com/brackets/basketball-men/d1/2019)

## Running the tests

```
node server.js
ng serve
```

## Built With

* [Angular CLI](https://cli.angular.io/) - Development tool and library specialized for Angular.
* [Express](https://github.com/expressjs/express) - Web framework for node.
* [request-promise](https://github.com/request/request-promise) - A simplified HTTP request with Promise support. Used to scrape the HTML from a URL.  
* [cheerio](https://github.com/cheeriojs/cheerio) - jQuery designed specifically for the server. Used to parse the HTML. 
