import { Component, OnInit, Input } from '@angular/core';
import { Gameresults, Squareresults } from '../game-results';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-square-detail',
  templateUrl: './square-detail.component.html',
  styleUrls: ['./square-detail.component.scss']
})
export class SquareDetailComponent implements OnInit {
  square: Squareresults;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSquare();
  }
  getSquare(): void {
    // const id = +this.route.snapshot.paramMap.get('id'); //converts to number
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.getSquare(id)
        .subscribe(square => this.square = square);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.gameService.updateSquare(this.square)
      // .subscribe(response => {});
      .subscribe(()=> this.goBack());
  }

}
