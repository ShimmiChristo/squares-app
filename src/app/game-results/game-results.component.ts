import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers } from '../game-results';
// import { GAMERESULTSTABLE } from '../mock-game-results';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  gameTable: Gameresults[];
  squaresTable: Squareresults[];
  winningNumsTable: Winningnumbers[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
    // this.getWinningNums();
    this.getSquares();
    this.highlightWinners();
  }

  getGames(): void {
    this.gameService.getWinningNums()
        .subscribe(winningNumsTable => {
          this.winningNumsTable = winningNumsTable;
          this.winningNumsTable.forEach(nums => {
          // console.log(nums);
        })
      })

    this.gameService.getGames()
        .subscribe(gameTable => {
          this.gameTable = gameTable;
          this.winningNumsTable.forEach(nums => {
            // console.log(nums);
          })
          this.gameTable.forEach(games => {
            // if(games.teamOne == 70){
              // console.log(games.teamOne.toString().substr(-1));
              // console.log(games.teamTwo.toString().substr(-1));
              this.winningNumsTable.forEach(nums => {
                // console.log(nums);
                if (games.teamOne.toString().substr(-1) == nums.teamX.toString()) {
                  console.log(games);
                  // return games;
                }
              })
            // }
          })
        })
  }

  // getWinningNums(): void {
    // this.winningNumsTable.forEach(nums => {
      // console.log(nums);
    // })
  // }

  getSquares(): void {
    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable)
  }

  highlightWinners(): void {
    let games = this.gameService.getGames();
    this.gameService.getWinningNums()
      .subscribe(winningNumsTable => {
        this.winningNumsTable = winningNumsTable;
        this.winningNumsTable.forEach(nums => {
          // console.log(nums);

        })
    }); 
    this.gameService.getGames()
      .subscribe(gameTable => {
        this.gameTable = this.gameTable;
        this.gameTable.forEach(game => {
          // console.log(game);
      })
    });
}

  add(teamOne, teamTwo): void {
    teamOne = teamOne.trim();
    teamTwo = teamTwo.trim();
    if (!teamOne || !teamTwo) { return; }
    this.gameService.addGame({ teamOne, teamTwo } as Gameresults)
      .subscribe(game => {
        this.gameTable.push(game);
      });
  }

  delete(game: Gameresults): void {
    this.gameTable = this.gameTable.filter(h => h !== game);
    this.gameService.deleteGame(game).subscribe();
  }

}
