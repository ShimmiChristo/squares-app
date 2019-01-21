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
    const SQUARESTABLE = [
      { id: 1, user: 'Chris'},
      { id: 2, user: 'Alan'},
      { id: 3, user: 'Gary'},
      { id: 4, user: 'Matt'},
      { id: 5, user: 'Matt'},
      { id: 6, user: 'Matt'},
      { id: 7, user: 'Matt'},
      { id: 8, user: 'Matt'},
      { id: 9, user: 'Matt9'},
      { id: 10, user: 'Matt10'},

      { id: 11, user: 'Chris'},
      { id: 12, user: 'Alan'},
      { id: 13, user: 'Gary'},
      { id: 14, user: 'Matt'},
      { id: 15, user: 'Matt'},
      { id: 16, user: 'Matt'},
      { id: 17, user: 'Matt'},
      { id: 18, user: 'Matt'},
      { id: 19, user: 'Matt9'},
      { id: 20, user: 'Matt10'},

      { id: 21, user: 'Chris'},
      { id: 22, user: 'Alan'},
      { id: 23, user: 'Gary'},
      { id: 24, user: 'Matt'},
      { id: 25, user: 'Matt'},
      { id: 26, user: 'Matt'},
      { id: 27, user: 'Matt'},
      { id: 28, user: 'Matt'},
      { id: 29, user: 'Matt9'},
      { id: 30, user: 'Matt10'},

      { id: 31, user: 'Chris'},
      { id: 32, user: 'Alan'},
      { id: 33, user: 'Gary'},
      { id: 34, user: 'Matt'},
      { id: 35, user: 'Matt'},
      { id: 36, user: 'Matt'},
      { id: 37, user: 'Matt'},
      { id: 38, user: 'Matt'},
      { id: 39, user: 'Matt9'},
      { id: 40, user: 'Matt10'},

      { id: 41, user: 'Chris'},
      { id: 42, user: 'Alan'},
      { id: 43, user: 'Gary'},
      { id: 44, user: 'Matt'},
      { id: 45, user: 'Matt'},
      { id: 46, user: 'Matt'},
      { id: 47, user: 'Matt'},
      { id: 48, user: 'Matt'},
      { id: 49, user: 'Matt9'},
      { id: 50, user: 'Matt10'},

      { id: 51, user: 'Chris'},
      { id: 52, user: 'Alan'},
      { id: 53, user: 'Gary'},
      { id: 54, user: 'Matt'},
      { id: 55, user: 'Matt'},
      { id: 56, user: 'Matt'},
      { id: 57, user: 'Matt'},
      { id: 58, user: 'Matt'},
      { id: 59, user: 'Matt9'},
      { id: 60, user: 'Matt10'},

      { id: 61, user: 'Chris'},
      { id: 62, user: 'Alan'},
      { id: 63, user: 'Gary'},
      { id: 64, user: 'Matt'},
      { id: 65, user: 'Matt'},
      { id: 66, user: 'Matt'},
      { id: 67, user: 'Matt'},
      { id: 68, user: 'Matt'},
      { id: 69, user: 'Matt9'},
      { id: 70, user: 'Matt10'},

      { id: 71, user: 'Chris'},
      { id: 72, user: 'Alan'},
      { id: 73, user: 'Gary'},
      { id: 74, user: 'Matt'},
      { id: 75, user: 'Matt'},
      { id: 76, user: 'Matt'},
      { id: 77, user: 'Matt'},
      { id: 78, user: 'Matt'},
      { id: 79, user: 'Matt9'},
      { id: 80, user: 'Matt10'},

      { id: 81, user: 'Chris'},
      { id: 82, user: 'Alan'},
      { id: 83, user: 'Gary'},
      { id: 84, user: 'Matt'},
      { id: 85, user: 'Matt'},
      { id: 86, user: 'Matt'},
      { id: 87, user: 'Matt'},
      { id: 88, user: 'Matt'},
      { id: 89, user: 'Matt9'},
      { id: 90, user: 'Matt10'},

      { id: 91, user: 'Chris'},
      { id: 92, user: 'Alan'},
      { id: 93, user: 'Gary'},
      { id: 94, user: 'Matt'},
      { id: 95, user: 'Matt'},
      { id: 96, user: 'Matt'},
      { id: 97, user: 'Matt'},
      { id: 98, user: 'Matt'},
      { id: 99, user: 'Matt9'},
      { id: 100, user: 'Matt10'}
      
    ]
    return {GAMERESULTSTABLE, SQUARESTABLE};
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