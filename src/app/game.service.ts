import { Injectable } from '@angular/core';
import { Gameresults, Squareresults } from './game-results';
import { GAMERESULTSTABLE } from './mock-game-results';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// import { type } from 'os';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class GameService {
  private gamesUrl = 'api/GAMERESULTSTABLE';  // URL to web api
  private squaresUrl = 'api/SQUARESTABLE';
  private winningNumsUrl = 'api/WINNINGNUMS';


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getGames(): Observable<Gameresults[]> {
    //TODO: send the messsage _after_ fetching the gameTable
    // this.messageService.add("GameService: fetched gameTable");s
    // return of (GAMERESULTSTABLE);
    return this.http.get<Gameresults[]>(this.gamesUrl)
        .pipe(
          tap(_=> this.log('fetched games')),
          catchError(this.handleError('getGames', []))
        );
  }
  getWinningNums(): Obserable<Gameresults[]> {
    return this.http.get<Gameresults[]>(this.winningNumsUrl)
      .pipe (
        tap(_=> this.log('fetched winners')),
        catchError(this.handleError('getWinningNums', []))
      );
  }

  getSquares(): Observable<Squareresults[]> {
    return this.http.get<Squareresults[]>(this.squaresUrl)
      .pipe(
        tap(_=> this.log('fetched squares')),
        catchError(this.handleError('getSquares', []))
      );
  }

  getGame(id: number): Observable<Gameresults> {
    //TODO: send the message _after_ fetching the game-result
    // this.messageService.add(`GameService: fetched game id=${id}`);
    // return of (GAMERESULTSTABLE.find(game => game.id === id));
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Gameresults>(url)
      .pipe(
        tap(_=> this.log(`fetched game id=${id}`)),
        catchError(this.handleError<Gameresults>(`fetched game id=${id}`))
      );
  }

  updateGame(game: Gameresults): Observable<any> {
    return this.http.put(this.gamesUrl, game, httpOptions)
      .pipe(
        tap(_=> this.log(`saved game id=${game.id}`)),
        catchError(this.handleError<any>('updateGame'))
      );
  }

  addGame(game: Gameresults): Observable<Gameresults> {
    return this.http.post<Gameresults>(this.gamesUrl, game, httpOptions)
      .pipe(
        tap((game: Gameresults) => this.log(`added game w/ id=${game.id}`)),
        catchError(this.handleError<Gameresults>('addGame'))
      );
  }

  deleteGame(game: Gameresults | number): Observable<Gameresults> {
    const id = typeof game === 'number' ? game : game.id;
    const url = `${this.gamesUrl}/${id}`;
    return this.http.delete<Gameresults>(url, httpOptions)
      .pipe(
        tap(_=> this.log(`deleted game id=${id}`)),
        catchError(this.handleError<Gameresults>('deleteGame'))
      );
  }

  /** Log a GameService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GameService: ${message}`);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
