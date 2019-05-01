import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers, Ncaaresults } from '../game-results';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  gameTable: Gameresults[];
  ncaaTable: Ncaaresults[];
  squaresTable: Squareresults[];
  winningNumsTable: Winningnumbers[];
  editCell: any;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNCAA();
    this.getGames();
    this.getWinningNums();
    this.getSquares();
    // this.highlightWinners();
  }


  getNCAA(): void {
    this.gameService.getNCAA()
        .subscribe(
            ncaaTable => this.ncaaTable = ncaaTable)
            // console.log(this.ncaaTable)
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
          console.log(ncaaTable[i]);
          for (var j=0; j < ncaaTable[i].length; j++) {
            console.log(ncaaTable[i][j]);
          }

        // }
            // this.gameArr.forEach((games, index) => {
            //   // console.log(games);
            //   this.squaresTable.forEach(nums => {
            //     if (games.winningScore.toString().substr(-1) == nums.teamX.toString() && 
            //         games.losingScore.toString().substr(-1) == nums.teamY.toString() ) {
            //           this.gameService.getWinningNums()
            //           .subscribe(game => {
            //             // if (this.winningNumsTable.findIndex(x => x.id == nums.id) === -1){
            //               this.winningNumsTable.push(nums);
            //               // console.log(this.winningNumsTable);
            //             // }
            //             });
            //           }
            //       })
            //     })

          // })
        }
        })
    }

  getSquares(): void {
    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable)
  }

  addSquare(user, teamY, teamX): void {
    user = user.trim();
    teamY = teamY.trim();
    teamX = teamX.trim();
    if (!teamY || !teamX) { return; }
    this.gameService.addSquare({ user, teamY, teamX } as Squareresults)
      .subscribe(square => {
        this.squaresTable.push(square);
        console.log(this.squaresTable);
      });
  }


  // toggle(winningNum): void {
  //   this.editCell = winningNum;
  //   this.gameService.getSquare()
  //   .subscribe(squaresTable => this.squaresTable = squaresTable)
  // }

  highlightWinners(): void {
    let games = this.gameService.getGames();
    this.gameService.getWinningNums()
      .subscribe(winningNumsTable => {
        this.winningNumsTable = winningNumsTable;
        this.winningNumsTable.forEach(nums => {
          // console.log(nums);

        })
      }); 
      this.gameService.getGames()
        .subscribe(gameTable => {
          this.gameTable = this.gameTable;
          this.gameTable.forEach(game => {
              // if (games.teamOne.toString().substr(-1) == nums.teamX.toString()) {

              // }
                // console.log(game);
        })
      });
  }

  add(teamOne, teamTwo): void {
    teamOne = teamOne.trim();
    teamTwo = teamTwo.trim();
    if (!teamOne || !teamTwo) { return; }
    this.gameService.addGame({ teamOne, teamTwo } as Gameresults)
      .subscribe(game => {
        this.gameTable.push(game);
        console.log(this.gameTable);
      });
  }
  

  delete(game: Gameresults): void {
    this.gameTable = this.gameTable.filter(h => h !== game);
    this.gameService.deleteGame(game).subscribe();
  }

  addWinner(): void {
    this.gameService.getSquares()
    .subscribe(squaresTable => this.squaresTable = squaresTable);
    
    this.gameService.getGames()
      .subscribe(gameTable => { this.gameTable = gameTable;
        this.gameTable.forEach(games => {
          this.squaresTable.forEach(nums => {
            if (games.teamOne.toString().substr(-1) == nums.teamX.toString() && 
                games.teamTwo.toString().substr(-1) == nums.teamY.toString() ) {
                  
                  this.gameService.addWinner({} as Winningnumbers)
                  .subscribe(game => {
                      this.winningNumsTable.push(game);
                      console.log(this.winningNumsTable);
                    });
                  // this.gameService.getWinningNums()
                  // .subscribe(game => {
                  //     this.winningNumsTable.push(nums);
                  //     console.log(this.winningNumsTable);
                  //   });
                  }
              })
            })
          })
   
    }

}
