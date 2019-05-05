import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers, Ncaaresults } from '../game-results';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
// import {GameResultsComponent } from '../game-results/game-results.component';


@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {
  gameTable: Gameresults[];
  squaresTable: Squareresults[];
  winningNumsTable: any[];
  ncaaTable: any[];
  editCell: any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    // private GameResultsComponent: GameResultsComponent,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGames();
    this.getWinningNums();

  }

  getGames(): void {
    this.gameService.getGames()
        .subscribe(gameTable => this.gameTable = gameTable)
  }

  getWinningNums(): void {
    this.winningNumsTable = [];

    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable);
      
    this.gameService.getNCAA()
      .subscribe((ncaaTable : any[]) => { this.ncaaTable = ncaaTable;
        // for (var i=0; i < ncaaTable.length; i++) {
        //   ncaaTable[i].forEach(games => {
        //     this.squaresTable.forEach(nums => {
        //       // if the last digit of the winning score matches the column number and the last digit of the losing score matches the row number
        //       if (games.winningScore.toString().substr(-1) == nums.teamX.toString() && 
        //           games.losingScore.toString().substr(-1) == nums.teamY.toString() ) {
        //             this.gameService.getWinningNums()
        //             //hard coding in each round of money. Need to create admin area to determine money values. 
        //             if(games.round == 'round-1') {
        //               this.winningNumsTable.push({
        //                   'round': games.round,
        //                   'money': 5,
        //                   'user': nums.user, 
        //                   'squareWinner': nums.teamX,
        //                   'squareLoser': nums.teamY, 
        //                   'winningScore': games.winningScore, 
        //                   'losingScore': games.losingScore
        //                 });
        //             }
        //             if(games.round == 'round-2') {
        //               this.winningNumsTable.push({
        //                   'round': games.round,
        //                   'money': 10,
        //                   'user': nums.user, 
        //                   'squareWinner': nums.teamX,
        //                   'squareLoser': nums.teamY, 
        //                   'winningScore': games.winningScore, 
        //                   'losingScore': games.losingScore
        //                 });
        //             }
        //             if(games.round == 'round-3') {
        //               this.winningNumsTable.push({
        //                   'round': games.round,
        //                   'money': 20,
        //                   'user': nums.user, 
        //                   'squareWinner': nums.teamX,
        //                   'squareLoser': nums.teamY, 
        //                   'winningScore': games.winningScore, 
        //                   'losingScore': games.losingScore
        //                 });
        //             }
        //             if(games.round == 'round-4') {
        //               this.winningNumsTable.push({
        //                   'round': games.round,
        //                   'money': 40,
        //                   'user': nums.user, 
        //                   'squareWinner': nums.teamX,
        //                   'squareLoser': nums.teamY, 
        //                   'winningScore': games.winningScore, 
        //                   'losingScore': games.losingScore
        //                 });
        //             }
        //             if(games.round == 'final-games') {
        //               this.winningNumsTable.push({
        //                   'round': games.round,
        //                   'money': 80,
        //                   'user': nums.user, 
        //                   'squareWinner': nums.teamX,
        //                   'squareLoser': nums.teamY, 
        //                   'winningScore': games.winningScore, 
        //                   'losingScore': games.losingScore
        //                 });
        //             }

        //             }
        //          })
        //       })
        //     }
        })
    }

}
