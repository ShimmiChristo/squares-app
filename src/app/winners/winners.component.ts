import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers, Ncaaresults } from '../game-results';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';


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
        // console.log(ncaaTable);
        // ncaaTable.map(function(gameArr, i){
        for (var i=0; i < ncaaTable.length; i++) {
          ncaaTable[i].forEach(games => {
            this.squaresTable.forEach(nums => {
              if (games.winningScore.toString().substr(-1) == nums.teamX.toString() && 
              games.losingScore.toString().substr(-1) == nums.teamY.toString() ) {
                    this.gameService.getWinningNums()
                    .subscribe((game : any[]) => {
                        this.winningNumsTable.push(
                          {
                            'round': games.round,
                            'user': nums.user, 
                            'squareWinner': nums.teamX,
                            'squareLoser': nums.teamY, 
                            'winningScore': games.winningScore, 
                            'losingScore': games.losingScore
                          }
                        );
                      });
                    }
                })
          })
          }
        })
    }

}
