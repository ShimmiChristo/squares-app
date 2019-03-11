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
      { _id: 1, teamOne: 71, teamTwo: 57}, 
      { _id: 2, teamOne: 70, teamTwo: 56}, 
      { _id: 3, teamOne: 51, teamTwo: 56}, 
      { _id: 4, teamOne: 42, teamTwo: 71}, 
      { _id: 5, teamOne: 19, teamTwo: 64}, 
      { _id: 6, teamOne: 67, teamTwo: 59}
    ];
    const SQUARESTABLE = [
      { _id: 1, user: 'Chris1', teamY: 0, teamX: 7 },
      { _id: 2, user: 'Alan2', teamY: 0, teamX: 6 },
      { _id: 3, user: 'Gary3', teamY: 0, teamX: 4 },
      { _id: 4, user: 'Mat4t', teamY: 0, teamX: 8 },
      { _id: 5, user: 'Mat5t', teamY: 0, teamX: 1 },
      { _id: 6, user: 'Matt6', teamY: 0, teamX: 0 },
      { _id: 7, user: 'Matt7', teamY: 0, teamX: 5 },
      { _id: 8, user: 'Matt8', teamY: 0, teamX: 9 },
      { _id: 9, user: 'Matt9', teamY: 0, teamX: 3 },
      { _id: 10, user: 'Matt10', teamY: 0, teamX: 2 },

      { _id: 11, user: 'Chris', teamY: 1, teamX: 7 },
      { _id: 12, user: 'Alan', teamY: 1, teamX: 6 },
      { _id: 13, user: 'Gary', teamY: 1, teamX: 4 },
      { _id: 14, user: 'Matt', teamY: 1, teamX: 8 },
      { _id: 15, user: 'Matt', teamY: 1, teamX: 1 },
      { _id: 16, user: 'Matt', teamY: 1, teamX: 0 },
      { _id: 17, user: 'Matt', teamY: 1, teamX: 5 },
      { _id: 18, user: 'Matt', teamY: 1, teamX: 9 },
      { _id: 19, user: 'Matt9', teamY: 1, teamX: 3 },
      { _id: 20, user: 'Matt20', teamY: 1, teamX: 2 },

      { _id: 21, user: 'Chris', teamY: 2, teamX: 7 },
      { _id: 22, user: 'Alan', teamY: 2, teamX: 6 },
      { _id: 23, user: 'Gary', teamY: 2, teamX: 4 },
      { _id: 24, user: 'Matt', teamY: 2, teamX: 8 },
      { _id: 25, user: 'Matt', teamY: 2, teamX: 1 },
      { _id: 26, user: 'Matt', teamY: 2, teamX: 0 },
      { _id: 27, user: 'Matt', teamY: 2, teamX: 5 },
      { _id: 28, user: 'Matt', teamY: 2, teamX: 9 },
      { _id: 29, user: 'Matt9', teamY: 2, teamX: 3 },
      { _id: 30, user: 'Matt10', teamY: 2, teamX: 2 },

      { _id: 31, user: 'Chris', teamY: 3, teamX: 7 },
      { _id: 32, user: 'Alan', teamY: 3, teamX: 6 },
      { _id: 33, user: 'Gary', teamY: 3, teamX: 4 },
      { _id: 34, user: 'Matt', teamY: 3, teamX: 8 },
      { _id: 35, user: 'Matt', teamY: 3, teamX: 1 },
      { _id: 36, user: 'Matt', teamY: 3, teamX: 0 },
      { _id: 37, user: 'Matt', teamY: 3, teamX: 5 },
      { _id: 38, user: 'Matt', teamY: 3, teamX: 9 },
      { _id: 39, user: 'Matt9', teamY: 3, teamX: 3 },
      { _id: 40, user: 'Matt10', teamY: 3, teamX: 2 },

      { _id: 41, user: 'Chris', teamY: 4, teamX: 7 },
      { _id: 42, user: 'Alan', teamY: 4, teamX: 6 },
      { _id: 43, user: 'Gary', teamY: 4, teamX: 4 },
      { _id: 44, user: 'Matt', teamY: 4, teamX: 8 },
      { _id: 45, user: 'Matt', teamY: 4, teamX: 1 },
      { _id: 46, user: 'Matt', teamY: 4, teamX: 0 },
      { _id: 47, user: 'Matt', teamY: 4, teamX: 5 },
      { _id: 48, user: 'Matt48', teamY: 4, teamX: 9 },
      { _id: 49, user: 'Matt9', teamY: 4, teamX: 3 },
      { _id: 50, user: 'Matt10', teamY: 4, teamX: 2 },

      { _id: 51, user: 'Chris', teamY: 5, teamX: 7 },
      { _id: 52, user: 'Alan', teamY: 5, teamX: 6 },
      { _id: 53, user: 'Gary', teamY: 5, teamX: 4 },
      { _id: 54, user: 'Matt', teamY: 5, teamX: 8 },
      { _id: 55, user: 'Matt', teamY: 5, teamX: 1 },
      { _id: 56, user: 'Matt', teamY: 5, teamX: 0 },
      { _id: 57, user: 'Matt', teamY: 5, teamX: 5 },
      { _id: 58, user: 'Matt', teamY: 5, teamX: 9 },
      { _id: 59, user: 'Matt9', teamY: 5, teamX: 3 },
      { _id: 60, user: 'Matt10', teamY: 5, teamX: 2 },

      { _id: 61, user: 'Chris', teamY: 6, teamX: 7 },
      { _id: 62, user: 'Alan', teamY: 6, teamX: 6 },
      { _id: 63, user: 'Gary', teamY: 6, teamX: 4 },
      { _id: 64, user: 'Matt64', teamY: 6, teamX: 8 },
      { _id: 65, user: 'Matt65', teamY: 6, teamX: 1 },
      { _id: 66, user: 'Matt66', teamY: 6, teamX: 0 },
      { _id: 67, user: 'Matt', teamY: 6, teamX: 5 },
      { _id: 68, user: 'Matt', teamY: 6, teamX: 9 },
      { _id: 69, user: 'Matt9', teamY: 6, teamX: 3 },
      { _id: 70, user: 'Matt10', teamY: 6, teamX: 2 },

      { _id: 71, user: 'Chris', teamY: 7, teamX: 7 },
      { _id: 72, user: 'Alan', teamY: 7, teamX: 6 },
      { _id: 73, user: 'Gary', teamY: 7, teamX: 4 },
      { _id: 74, user: 'Matt', teamY: 7, teamX: 8 },
      { _id: 75, user: 'Matt75', teamY: 7, teamX: 1 },
      { _id: 76, user: 'Matt', teamY: 7, teamX: 0 },
      { _id: 77, user: 'Matt', teamY: 7, teamX: 5 },
      { _id: 78, user: 'Matt', teamY: 7, teamX: 9 },
      { _id: 79, user: 'Matt9', teamY: 7, teamX: 3 },
      { _id: 80, user: 'Matt10', teamY: 7, teamX: 7 },

      { _id: 81, user: 'Chris', teamY: 8, teamX: 7 },
      { _id: 82, user: 'Alan', teamY: 8, teamX: 6 },
      { _id: 83, user: 'Gary', teamY: 8, teamX: 4 },
      { _id: 84, user: 'Matt', teamY: 8, teamX: 8 },
      { _id: 85, user: 'Matt', teamY: 8, teamX: 1 },
      { _id: 86, user: 'Matt', teamY: 8, teamX: 0 },
      { _id: 87, user: 'Matt', teamY: 8, teamX: 5 },
      { _id: 88, user: 'Matt', teamY: 8, teamX: 9 },
      { _id: 89, user: 'Matt9', teamY: 8, teamX: 3 },
      { _id: 90, user: 'Matt10', teamY: 8, teamX: 2 },

      { _id: 91, user: 'Chris91', teamY: 9, teamX: 7 },
      { _id: 92, user: 'Alan', teamY: 9, teamX: 6 },
      { _id: 93, user: 'Gary', teamY: 9, teamX: 4 },
      { _id: 94, user: 'Matt', teamY: 9, teamX: 8 },
      { _id: 95, user: 'Matt', teamY: 9, teamX: 1 },
      { _id: 96, user: 'Matt', teamY: 9, teamX: 0 },
      { _id: 97, user: 'Matt', teamY: 9, teamX: 5 },
      { _id: 98, user: 'Matt', teamY: 9, teamX: 9 },
      { _id: 99, user: 'Matt9', teamY: 9, teamX: 3 },
      { _id: 100, user: 'Matt10', teamY: 9, teamX: 2 }
      
    ]
    return {GAMERESULTSTABLE, WINNINGNUMS, SQUARESTABLE};
  }
  // Overrides the genId method to ensure that a game always has an id.
  // If the GAMERESULTSTABLE array is empty,
  // the method below returns the initial number (11).
  // if the GAMERESULTSTABLE array is not empty, the method below returns the highest
  // game id + 1.
  
  // genId(GAMERESULTSTABLE: Gameresults[]): number {
  //   return GAMERESULTSTABLE.length > 0 ? Math.max(...GAMERESULTSTABLE.map(game => game._id)) + 1 : 11;
  // }
}