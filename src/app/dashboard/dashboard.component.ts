import { Component, OnInit } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers } from '../game-results';
import { GameService } from '../game.service';
import { compileNgModule } from '@angular/compiler';

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
      .subscribe(squaresTable => { this.squaresTable = squaresTable
        var winningRows = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
        this.squaresTable.forEach((square, i) => {
            if(winningRows.includes(i)) {
              for (var ten=0; ten < 10; ten++) {
                if (squaresTable[i].teamY != square.teamY) {
                  squaresTable[i].teamY = square.teamY
                  this.gameService.updateSquare(squaresTable[i])
                  .subscribe(squaresTable => this.squaresTable = squaresTable);
                }
                i++;
              }
            }
          });
        const winningCols = [0,1,2,3,4,5,6,7,8,9];
        this.squaresTable.forEach((squareCol, j) => {

            if(winningCols.includes(j)) {
              for (var ten=0; ten < 100; ten += 10) {
                if (squaresTable[j].teamX != squareCol.teamX) {
                  squaresTable[j].teamX = squareCol.teamX;
                  this.gameService.updateSquare(squaresTable[j])
                  .subscribe(squaresTable => this.squaresTable = squaresTable);
                }
                j += 10;
              }
            }
        })
      })
}

  getWinningNums(): void {
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
                      this.winningNumsTable.push(nums);
                    });
                  }
              })
            })
          })
    }
}

