import { Gameresults } from './game-results';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const GAMERESULTSTABLE = [
      { id: 2, teamOne: 70, teamTwo: 56}, 
      { id: 3, teamOne: 56, teamTwo: 56}, 
      { id: 4, teamOne: 42, teamTwo: 71}, 
      { id: 5, teamOne: 19, teamTwo: 64}, 
      { id: 6, teamOne: 66, teamTwo: 59}
    ];
    return {GAMERESULTSTABLE};
  }
  // Overrides the genId method to ensure that a game always has an id.
  // If the GAMERESULTSTABLE array is empty,
  // the method below returns the initial number (11).
  // if the GAMERESULTSTABLE array is not empty, the method below returns the highest
  // game id + 1.
  genId(GAMERESULTSTABLE: Gameresults[]): number {
    return GAMERESULTSTABLE.length > 0 ? Math.max(...GAMERESULTSTABLE.map(game => game.id)) + 1 : 11;
  }
}