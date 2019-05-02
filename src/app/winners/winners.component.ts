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
  winningNumsTable: Winningnumbers[];
  ncaaTable: Ncaaresults[];
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
    // this.gameService.getWinningNums()
      // .subscribe(winningNumsTable => this.winningNumsTable = winningNumsTable);
    // teamOne = teamOne.trim();
    // teamTwo = teamTwo.trim();
    // if (!teamOne || !teamTwo) { return; }
    this.winningNumsTable = [];

    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable);
      
    this.gameService.getNCAA()
      .subscribe(ncaaTable => { this.ncaaTable = ncaaTable;
        // console.log(ncaaTable);
        // ncaaTable.map(function(gameArr, i){
        for (var i=0; i < ncaaTable.length; i++) {
          for (var j=0; j < ncaaTable[i].length; j++) {
            // console.log(ncaaTable[i][j]);
            this.squaresTable.forEach(nums => {
              if (ncaaTable[i][j].winningScore.toString().substr(-1) == nums.teamX.toString() && 
              ncaaTable[i][j].losingScore.toString().substr(-1) == nums.teamY.toString() ) {
                    this.gameService.getWinningNums()
                    .subscribe(game => {
                      // if (this.winningNumsTable.findIndex(x => x.id == nums.id) === -1){
                        this.winningNumsTable.push(
                            nums  
                        );
                      // }
                      });
                    }
                })
              }
              // )
          }

        // }
            // this.gameArr.forEach((games, index) => {
            //   // console.log(games);

          // })
        // }
        })
    }

}
