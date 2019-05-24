import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers, Winningusers } from '../game-results';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import { compileNgModule } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {
  gameTable: Gameresults[];
  squaresTable: Squareresults[];
  winningNumsTable: Winningnumbers[];
  ncaaTable: any[];
  editCell: any;
  userList: any[];
  finalWinners: any[];

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
    this.userList = [];
    this.finalWinners = [];

    this.gameService.getSquares()
      .subscribe(squaresTable => {
        this.squaresTable = squaresTable
        this.squaresTable.forEach(square => {
          // console.log(square);
          let foundName = this.userList.some( el => el.user === square.user);
          if (!foundName) {
            this.userList.push({
              'user': square.user,
              'money': 0
            })
          }
        })
      });
      
    this.gameService.getNCAA()
      .subscribe((ncaaTable : any[]) => { this.ncaaTable = ncaaTable;
        for (var i=0; i < ncaaTable.length; i++) {
          ncaaTable[i].forEach(games => {
            this.squaresTable.forEach(nums => {

              // if the last digit of the winning score matches the column number and the last digit of the losing score matches the row number
              if (games.winningScore.toString().substr(-1) == nums.teamX.toString() && 
                  games.losingScore.toString().substr(-1) == nums.teamY.toString() ) {
                    this.gameService.getWinningNums()

                    // this.userList.forEach(user => {
                    // })

                      // console.log(user);
                      //hard coding in each round of money. Need to create admin area to determine money values. 
                      if(games.round == 'round-1') {
                        let c = {};
                        c["money"] = 5;
                        for (var k in this.userList) {
                          console.log(k);
                          if(this.userList[k] = 'money'){
                            // console.log(this.userList[k]);
                            c[k] = this.userList[k] + 5;
                          }
                          else { c[k] = this.userList[k]}
                        }
                        // for (var k in games) {
                        //   if(typeof nums[k] != 'undefined'){  
                        //     c[k] = games[k] + nums[k]  
                        //   }
                        //   else{ c[k] = games[k]}
                        // }
                        // // copy remaining values of b (which were not common)
                        // for(var k in nums){
                        //   if(typeof c[k]== 'undefined'){
                        //     c[k] = nums[k]
                        //   }
                        // }
                        // console.log(c); 
                        this.winningNumsTable.push(c);
                        // this.winningNumsTable.push({
                        //     'round': games.round,
                        //     'money': 5,
                        //     'user': nums.user, 
                        //     'squareWinner': nums.teamX,
                        //     'squareLoser': nums.teamY, 
                        //     'winningScore': games.winningScore, 
                        //     'losingScore': games.losingScore
                        //   });
                      }


                      if(games.round == 'round-2') {
                        let c = {};
                        // c["money"] = 10;
                        for (var k in nums) {
                          if(nums[k] == 'money'){
                            c[k] = nums[k] + 10;
                          }
                          else { c[k] = nums[k]}
                        }
                        // console.log(c);
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
    // this.getMoneyAmounts();
        
    }

// trying to get winningNumsTable and display winners
    getMoneyAmounts() {
      console.log(this.winningNumsTable);
      console.log(this.winningNumsTable[2]);
      // this.gameService.getWinningNums()
      //     .subscribe(winningNumsTable => { this.winningNumsTable = winningNumsTable;
      this.winningNumsTable.forEach(winner => {
          console.log(winner);
          console.log('something');
      })
      // })
    }

}
