import { Component, OnInit } from '@angular/core';
import { Gameresults, Squareresults } from '../game-results';
import { GameService } from '../game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  gameTable: Gameresults[] = [];
  squaresTable: Squareresults[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
    this.getSquares();
  }

  getGames(): void {
    this.gameService.getGames() 
        .subscribe(gameTable => this.gameTable = gameTable.slice(1, 5))
  }

  getSquares(): void {
    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable)
  }
}

