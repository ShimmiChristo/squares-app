import { Component, OnInit } from '@angular/core';
import { Gameresults } from '../game-results';
import { GAMERESULTSTABLE } from '../mock-game-results';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  // game: Gameresults = {
  //   id: 1,
  //   teamOne: 83,
  //   teamTwo: 80
  // };
  gameTable = GAMERESULTSTABLE;
  selectedGame: Gameresults;
 
  constructor() { }

  ngOnInit() {
  }
  onSelect(game: Gameresults): void {
    this.selectedGame = game;
  }

}
