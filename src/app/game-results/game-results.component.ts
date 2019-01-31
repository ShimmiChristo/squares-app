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
    this.getWinningNums();
    this.getSquares();
    this.highlightWinners();
  }

  getGames(): void {
    this.gameService.getGames()
        .subscribe(gameTable => this.gameTable = gameTable)
  }

  getWinningNums(): void {
    this.gameService.getWinningNums()
      .subscribe(winningNumsTable => this.winningNumsTable = winningNumsTable)
  }

  getSquares(): void {
    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable)
  }

  highlightWinners(): void {
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
