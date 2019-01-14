import { Component, OnInit } from '@angular/core';
import { Gameresults } from '../game-results';
import { GameService } from '../game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  gameTable: Gameresults[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.gameService.getGames() 
        .subscribe(gameTable => this.gameTable = gameTable.slice(1, 5))
  }
}
