import { Injectable } from '@angular/core';
import { Gameresults } from './game-results';
import { GAMERESULTSTABLE } from './mock-game-results';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService) { }

  getGames(): Observable<Gameresults[]> {
    //TODO: send the messsage _after_ fetching the gameTable
    this.messageService.add("GameService: fetched gameTable");
    return of (GAMERESULTSTABLE);
  }

  getGame(id: number): Observable<Gameresults> {
    //TODO: send the message _after_ fetching the game-result
    this.messageService.add(`GameService: fetched game id=${id}`);
    return of (GAMERESULTSTABLE.find(game => game.id === id));
  }
}
