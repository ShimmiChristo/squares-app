import { Component, OnInit } from '@angular/core';
import { Squareresults, Winningnumbers } from './game-results';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App!';
  squaresTable: Squareresults[] = [];
  winningNumsTable: Winningnumbers[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    // this.getSquares();
  }

  getSquares(): void {
    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable)
  }

  getWinningNums(): void {
    this.gameService.getWinningNums()
      .subscribe(winningNumsTable => this.winningNumsTable = winningNumsTable)
  }


}
