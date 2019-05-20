import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Squareresults, Winningnumbers } from './game-results';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  title = 'The Squares Game App';
  squaresTable: Squareresults[];
  // winningNumsTable: Winningnumbers[] = [];
  winningNumsTable: any[];
  ncaaTable: any[];



  constructor(private gameService: GameService) { }

  ngOnInit() {
    // this.getSquares();
  }

  // getSquares(): void {
  //   this.gameService.getSquares()
  //     .subscribe(squaresTable => this.squaresTable = squaresTable)
  // }

  // getWinningNums(): void {
  //   this.gameService.getWinningNums()
  //     .subscribe(winningNumsTable => this.winningNumsTable = winningNumsTable)
  // }

  // getWinningNums(): void {
  //   this.winningNumsTable = [];

  //   this.gameService.getSquares()
  //     .subscribe(squaresTable => this.squaresTable = squaresTable);
      
  //   this.gameService.getNCAA()
  //     .subscribe((ncaaTable : any[]) => { this.ncaaTable = ncaaTable;
  //       for (var i=0; i < ncaaTable.length; i++) {
  //         ncaaTable[i].forEach(games => {
  //           this.squaresTable.forEach(nums => {
  //             // if the last digit of the winning score matches the column number and the last digit of the losing score matches the row number
  //             if (games.winningScore.toString().substr(-1) == nums.teamX.toString() && 
  //                 games.losingScore.toString().substr(-1) == nums.teamY.toString() ) {
  //                   this.gameService.getWinningNums()
  //                   // console.log(ncaaTable[4][0]);
  //                   //hard coding in each round of money. Need to create admin area to determine money values. 
  //                   if(games.round == 'round-1') {
  //                     this.winningNumsTable.push({
  //                         'round': games.round,
  //                         'money': 5,
  //                         'user': nums.user, 
  //                         'squareWinner': nums.teamX,
  //                         'squareLoser': nums.teamY, 
  //                         'winningScore': games.winningScore, 
  //                         'losingScore': games.losingScore
  //                       });
  //                   }
  //                   if(games.round == 'round-2') {
  //                     this.winningNumsTable.push({
  //                         'round': games.round,
  //                         'money': 10,
  //                         'user': nums.user, 
  //                         'squareWinner': nums.teamX,
  //                         'squareLoser': nums.teamY, 
  //                         'winningScore': games.winningScore, 
  //                         'losingScore': games.losingScore
  //                       });
  //                   }
  //                   if(games.round == 'round-3') {
  //                     this.winningNumsTable.push({
  //                         'round': games.round,
  //                         'money': 20,
  //                         'user': nums.user, 
  //                         'squareWinner': nums.teamX,
  //                         'squareLoser': nums.teamY, 
  //                         'winningScore': games.winningScore, 
  //                         'losingScore': games.losingScore
  //                       });
  //                   }
  //                   if(games.round == 'round-4') {
  //                     this.winningNumsTable.push({
  //                         'round': games.round,
  //                         'money': 40,
  //                         'user': nums.user, 
  //                         'squareWinner': nums.teamX,
  //                         'squareLoser': nums.teamY, 
  //                         'winningScore': games.winningScore, 
  //                         'losingScore': games.losingScore
  //                       });
  //                   }
  //                   if(games.round == 'final-games') {
  //                     this.winningNumsTable.push({
  //                         'round': games.round,
  //                         'money': 80,
  //                         'user': nums.user, 
  //                         'squareWinner': nums.teamX,
  //                         'squareLoser': nums.teamY, 
  //                         'winningScore': games.winningScore, 
  //                         'losingScore': games.losingScore
  //                       });
  //                   }
  //                   if(games.round == 'champ-game') {
  //                     this.winningNumsTable.push({
  //                         'round': games.round,
  //                         'money': 200,
  //                         'user': nums.user, 
  //                         'squareWinner': nums.teamX,
  //                         'squareLoser': nums.teamY, 
  //                         'winningScore': games.winningScore, 
  //                         'losingScore': games.losingScore
  //                       });
  //                   }

  //                   }
  //                })
  //             })
  //           }

  //       })
  //   }


}
