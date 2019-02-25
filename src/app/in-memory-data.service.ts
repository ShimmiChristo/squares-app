import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Gameresults } from './game-results';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const WINNINGNUMS = [];
    const GAMERESULTSTABLE = [
      { id: 1, teamOne: 71, teamTwo: 57}, 
      { id: 2, teamOne: 70, teamTwo: 56}, 
      { id: 3, teamOne: 51, teamTwo: 56}, 
      { id: 4, teamOne: 42, teamTwo: 71}, 
      { id: 5, teamOne: 19, teamTwo: 64}, 
      { id: 6, teamOne: 67, teamTwo: 59}
    ];
    const SQUARESTABLE = [
      { id: 1, user: 'Chris1', teamY: 0, teamX: 7 },
      { id: 2, user: 'Alan2', teamY: 0, teamX: 6 },
      { id: 3, user: 'Gary3', teamY: 0, teamX: 4 },
      { id: 4, user: 'Mat4t', teamY: 0, teamX: 8 },
      { id: 5, user: 'Mat5t', teamY: 0, teamX: 1 },
      { id: 6, user: 'Matt6', teamY: 0, teamX: 0 },
      { id: 7, user: 'Matt7', teamY: 0, teamX: 5 },
      { id: 8, user: 'Matt8', teamY: 0, teamX: 9 },
      { id: 9, user: 'Matt9', teamY: 0, teamX: 3 },
      { id: 10, user: 'Matt10', teamY: 0, teamX: 2 },

      { id: 11, user: 'Chris', teamY: 1, teamX: 7 },
      { id: 12, user: 'Alan', teamY: 1, teamX: 6 },
      { id: 13, user: 'Gary', teamY: 1, teamX: 4 },
      { id: 14, user: 'Matt', teamY: 1, teamX: 8 },
      { id: 15, user: 'Matt', teamY: 1, teamX: 1 },
      { id: 16, user: 'Matt', teamY: 1, teamX: 0 },
      { id: 17, user: 'Matt', teamY: 1, teamX: 5 },
      { id: 18, user: 'Matt', teamY: 1, teamX: 9 },
      { id: 19, user: 'Matt9', teamY: 1, teamX: 3 },
      { id: 20, user: 'Matt20', teamY: 1, teamX: 2 },

      { id: 21, user: 'Chris', teamY: 2, teamX: 7 },
      { id: 22, user: 'Alan', teamY: 2, teamX: 6 },
      { id: 23, user: 'Gary', teamY: 2, teamX: 4 },
      { id: 24, user: 'Matt', teamY: 2, teamX: 8 },
      { id: 25, user: 'Matt', teamY: 2, teamX: 1 },
      { id: 26, user: 'Matt', teamY: 2, teamX: 0 },
      { id: 27, user: 'Matt', teamY: 2, teamX: 5 },
      { id: 28, user: 'Matt', teamY: 2, teamX: 9 },
      { id: 29, user: 'Matt9', teamY: 2, teamX: 3 },
      { id: 30, user: 'Matt10', teamY: 2, teamX: 2 },

      { id: 31, user: 'Chris', teamY: 3, teamX: 7 },
      { id: 32, user: 'Alan', teamY: 3, teamX: 6 },
      { id: 33, user: 'Gary', teamY: 3, teamX: 4 },
      { id: 34, user: 'Matt', teamY: 3, teamX: 8 },
      { id: 35, user: 'Matt', teamY: 3, teamX: 1 },
      { id: 36, user: 'Matt', teamY: 3, teamX: 0 },
      { id: 37, user: 'Matt', teamY: 3, teamX: 5 },
      { id: 38, user: 'Matt', teamY: 3, teamX: 9 },
      { id: 39, user: 'Matt9', teamY: 3, teamX: 3 },
      { id: 40, user: 'Matt10', teamY: 3, teamX: 2 },

      { id: 41, user: 'Chris', teamY: 4, teamX: 7 },
      { id: 42, user: 'Alan', teamY: 4, teamX: 6 },
      { id: 43, user: 'Gary', teamY: 4, teamX: 4 },
      { id: 44, user: 'Matt', teamY: 4, teamX: 8 },
      { id: 45, user: 'Matt', teamY: 4, teamX: 1 },
      { id: 46, user: 'Matt', teamY: 4, teamX: 0 },
      { id: 47, user: 'Matt', teamY: 4, teamX: 5 },
      { id: 48, user: 'Matt48', teamY: 4, teamX: 9 },
      { id: 49, user: 'Matt9', teamY: 4, teamX: 3 },
      { id: 50, user: 'Matt10', teamY: 4, teamX: 2 },

      { id: 51, user: 'Chris', teamY: 5, teamX: 7 },
      { id: 52, user: 'Alan', teamY: 5, teamX: 6 },
      { id: 53, user: 'Gary', teamY: 5, teamX: 4 },
      { id: 54, user: 'Matt', teamY: 5, teamX: 8 },
      { id: 55, user: 'Matt', teamY: 5, teamX: 1 },
      { id: 56, user: 'Matt', teamY: 5, teamX: 0 },
      { id: 57, user: 'Matt', teamY: 5, teamX: 5 },
      { id: 58, user: 'Matt', teamY: 5, teamX: 9 },
      { id: 59, user: 'Matt9', teamY: 5, teamX: 3 },
      { id: 60, user: 'Matt10', teamY: 5, teamX: 2 },

      { id: 61, user: 'Chris', teamY: 6, teamX: 7 },
      { id: 62, user: 'Alan', teamY: 6, teamX: 6 },
      { id: 63, user: 'Gary', teamY: 6, teamX: 4 },
      { id: 64, user: 'Matt64', teamY: 6, teamX: 8 },
      { id: 65, user: 'Matt65', teamY: 6, teamX: 1 },
      { id: 66, user: 'Matt66', teamY: 6, teamX: 0 },
      { id: 67, user: 'Matt', teamY: 6, teamX: 5 },
      { id: 68, user: 'Matt', teamY: 6, teamX: 9 },
      { id: 69, user: 'Matt9', teamY: 6, teamX: 3 },
      { id: 70, user: 'Matt10', teamY: 6, teamX: 2 },

      { id: 71, user: 'Chris', teamY: 7, teamX: 7 },
      { id: 72, user: 'Alan', teamY: 7, teamX: 6 },
      { id: 73, user: 'Gary', teamY: 7, teamX: 4 },
      { id: 74, user: 'Matt', teamY: 7, teamX: 8 },
      { id: 75, user: 'Matt75', teamY: 7, teamX: 1 },
      { id: 76, user: 'Matt', teamY: 7, teamX: 0 },
      { id: 77, user: 'Matt', teamY: 7, teamX: 5 },
      { id: 78, user: 'Matt', teamY: 7, teamX: 9 },
      { id: 79, user: 'Matt9', teamY: 7, teamX: 3 },
      { id: 80, user: 'Matt10', teamY: 7, teamX: 7 },

      { id: 81, user: 'Chris', teamY: 8, teamX: 7 },
      { id: 82, user: 'Alan', teamY: 8, teamX: 6 },
      { id: 83, user: 'Gary', teamY: 8, teamX: 4 },
      { id: 84, user: 'Matt', teamY: 8, teamX: 8 },
      { id: 85, user: 'Matt', teamY: 8, teamX: 1 },
      { id: 86, user: 'Matt', teamY: 8, teamX: 0 },
      { id: 87, user: 'Matt', teamY: 8, teamX: 5 },
      { id: 88, user: 'Matt', teamY: 8, teamX: 9 },
      { id: 89, user: 'Matt9', teamY: 8, teamX: 3 },
      { id: 90, user: 'Matt10', teamY: 8, teamX: 2 },

      { id: 91, user: 'Chris91', teamY: 9, teamX: 7 },
      { id: 92, user: 'Alan', teamY: 9, teamX: 6 },
      { id: 93, user: 'Gary', teamY: 9, teamX: 4 },
      { id: 94, user: 'Matt', teamY: 9, teamX: 8 },
      { id: 95, user: 'Matt', teamY: 9, teamX: 1 },
      { id: 96, user: 'Matt', teamY: 9, teamX: 0 },
      { id: 97, user: 'Matt', teamY: 9, teamX: 5 },
      { id: 98, user: 'Matt', teamY: 9, teamX: 9 },
      { id: 99, user: 'Matt9', teamY: 9, teamX: 3 },
      { id: 100, user: 'Matt10', teamY: 9, teamX: 2 }
      
    ]
    return {GAMERESULTSTABLE, WINNINGNUMS, SQUARESTABLE};
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