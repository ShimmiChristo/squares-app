import { Component, OnInit } from '@angular/core';
import { Gameresults } from '../game-results';
// import { GAMERESULTSTABLE } from '../mock-game-results';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  gameTable: Gameresults[];
  // selectedGame: Gameresults;
 
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }
  // onSelect(game: Gameresults): void {
  //   this.selectedGame = game;
  // }

  getGames(): void {
    this.gameService.getGames()
        .subscribe(gameTable => this.gameTable = gameTable)
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
