import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers } from '../game-results';
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
        
      this.gameService.getGames()
        .subscribe(gameTable => { this.gameTable = gameTable;
          this.gameTable.forEach(games => {
            this.squaresTable.forEach(nums => {
              if (games.teamOne.toString().substr(-1) == nums.teamX.toString() && 
                  games.teamTwo.toString().substr(-1) == nums.teamY.toString() ) {
                    this.gameService.getWinningNums()
                    .subscribe(game => {
                      // if (this.winningNumsTable.findIndex(x => x.id == nums.id) === -1){
                        this.winningNumsTable.push(nums);
                      // }
                      });
                    }
                })
              })
            })


  }

}
