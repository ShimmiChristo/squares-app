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
    this.winningNumsTable = [];

    this.gameService.getSquares()
      .subscribe(squaresTable => this.squaresTable = squaresTable);
      
    this.gameService.getNCAA()
      .subscribe((ncaaTable : any[]) => { this.ncaaTable = ncaaTable;
        for (var i=0; i < ncaaTable.length; i++) {
          ncaaTable[i].forEach(games => {
            this.squaresTable.forEach(nums => {
              // if the last digit of the winning score matches the column number and the last digit of the losing score matches the row number
              if (games.winningScore.toString().substr(-1) == nums.teamX.toString() && 
                  games.losingScore.toString().substr(-1) == nums.teamY.toString() ) {
                    this.gameService.getWinningNums()
                    // console.log(ncaaTable[4][0]);
                    //hard coding in each round of money. Need to create admin area to determine money values. 
                    if(games.round == 'round-1') {
                      this.winningNumsTable.push({
                          'round': games.round,
                          'money': 5,
                          'user': nums.user, 
                          'squareWinner': nums.teamX,
                          'squareLoser': nums.teamY, 
                          'winningScore': games.winningScore, 
                          'losingScore': games.losingScore
                        });
                    }
                    if(games.round == 'round-2') {
                      this.winningNumsTable.push({
                          'round': games.round,
                          'money': 10,
                          'user': nums.user, 
                          'squareWinner': nums.teamX,
                          'squareLoser': nums.teamY, 
                          'winningScore': games.winningScore, 
                          'losingScore': games.losingScore
                        });
                    }
                    if(games.round == 'round-3') {
                      this.winningNumsTable.push({
                          'round': games.round,
                          'money': 20,
                          'user': nums.user, 
                          'squareWinner': nums.teamX,
                          'squareLoser': nums.teamY, 
                          'winningScore': games.winningScore, 
                          'losingScore': games.losingScore
                        });
                    }
                    if(games.round == 'round-4') {
                      this.winningNumsTable.push({
                          'round': games.round,
                          'money': 40,
                          'user': nums.user, 
                          'squareWinner': nums.teamX,
                          'squareLoser': nums.teamY, 
                          'winningScore': games.winningScore, 
                          'losingScore': games.losingScore
                        });
                    }
                    if(games.round == 'final-games') {
                      this.winningNumsTable.push({
                          'round': games.round,
                          'money': 80,
                          'user': nums.user, 
                          'squareWinner': nums.teamX,
                          'squareLoser': nums.teamY, 
                          'winningScore': games.winningScore, 
                          'losingScore': games.losingScore
                        });
                    }
                    if(games.round == 'champ-game') {
                      this.winningNumsTable.push({
                          'round': games.round,
                          'money': 200,
                          'user': nums.user, 
                          'squareWinner': nums.teamX,
                          'squareLoser': nums.teamY, 
                          'winningScore': games.winningScore, 
                          'losingScore': games.losingScore
                        });
                    }

                    }
                 })
              })
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
