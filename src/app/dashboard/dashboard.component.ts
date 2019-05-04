import { Component, OnInit } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers } from '../game-results';
import { GameService } from '../game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  gameTable: Gameresults[];
  squaresTable: Squareresults[];
  winningNumsTable: Winningnumbers[];
  // square: Squareresults;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
    this.getWinningNums();
    this.getSquares();
  }

  getGames(): void {
    this.gameService.getGames() 
        .subscribe(gameTable => this.gameTable = gameTable.slice(1, 5))
  }

  getSquares(): void {
    this.gameService.getSquares()
      // .subscribe(squaresTable => this.squaresTable = squaresTable)
      .subscribe(squaresTable => { this.squaresTable = squaresTable
        this.squaresTable.forEach((square, i) => {
          if(i == 0 || i == 10 || i == 20) {
            console.log(square, i);
            console.log(square.teamX);
            square.teamX = 7;
            console.log(square.teamX);
            this.gameService.updateSquare(square)
            .subscribe(squaresTable => this.squaresTable = squaresTable);
          }

        })
      })
}

  getWinningNums(): void {
    // this.gameService.getWinningNums()
      // .subscribe(winningNumsTable => this.winningNumsTable = winningNumsTable);
    // teamOne = teamOne.trim();
    // teamTwo = teamTwo.trim();
    // if (!teamOne || !teamTwo) { return; }
    this.winningNumsTable = [];

    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable);
      
    this.gameService.getGames()
      .subscribe(gameTable => { this.gameTable = gameTable;
        this.gameTable.forEach(games => {
          this.squaresTable.forEach(nums => {
            if (games.teamOne.toString().substr(-1) == nums.teamX.toString() && 
                games.teamTwo.toString().substr(-1) == nums.teamY.toString() ) {
                  this.gameService.getWinningNums()
                  .subscribe(game => {
                    // if (this.winningNumsTable.findIndex(x => x.id == nums.id) === -1){
                      this.winningNumsTable.push(nums);
                      // console.log(this.winningNumsTable);
                    // }
                    });
                  }
              })
            })
          })
    }
}

