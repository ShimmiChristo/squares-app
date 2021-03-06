import { Injectable } from '@angular/core';
import { Gameresults, Squareresults, Winningnumbers, Ncaaresults, Winningusers } from './game-results';
// import { GAMERESULTSTABLE } from './mock-game-results';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// import { type } from 'os';

const httpOptions = {
  params: new HttpParams(  ),
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpDelete = {
  params: new HttpParams(  ),
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({ providedIn: 'root' })
export class GameService {
  // private gamesUrl = 'api/GAMERESULTSTABLE';  // URL to web api
  private ncaaURL = 'api/ncaa';
  private gamesUrl = 'api/games';
  private squaresUrl = 'api/squares';
  private winningNumsUrl = 'api/winners';


  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getNCAA(): Observable<Ncaaresults[]> {
    return this.http.get<Ncaaresults[]>(this.ncaaURL)
        .pipe(
          tap(_=> this.log('fetched NCAA Games')),
          catchError(this.handleError('getNCAA', []))
        );
  }
  getGames(): Observable<Gameresults[]> {
    return this.http.get<Gameresults[]>(this.gamesUrl)
        .pipe(
          tap(_=> this.log('fetched games')),
          catchError(this.handleError('getGames', []))
        );
  }
  getWinningNums(): Observable<Winningnumbers[]> {
    return this.http.get<Winningnumbers[]>(this.winningNumsUrl)
      .pipe (
        tap(_=> this.log('fetched winners')),
        catchError(this.handleError('getWinningNums', []))
      );
  }

  getWinningUsers(): Observable<Winningusers[]> {
    return this.http.get<Winningusers[]>(this.winningNumsUrl)
      .pipe (
        tap(_=> this.log('highlighted winners')),
        catchError(this.handleError('highlightWinners', []))
      );
  }

  getSquares(): Observable<Squareresults[]> {
    return this.http.get<Squareresults[]>(this.squaresUrl)
      .pipe(
        tap(_=> this.log('fetched squares')),
        catchError(this.handleError('getSquares', []))
      );
  }

  getSquare(id: string): Observable<Squareresults> {
    const url = `${this.squaresUrl}/${id}`;
    return this.http.get<Squareresults>(url)
    .pipe(
      tap(_=> this.log(`fetched game id=${id}`)),
      catchError(this.handleError<Squareresults>(`fetched game id=${id}`))
    );
  }

  updateSquare(square: Squareresults): Observable<any> {
    const url = `${this.squaresUrl}/update/${square._id}`;
    return this.http.put(url, square, httpOptions)
      .pipe(
        tap(_=> this.log(`saved square id=${square._id}`)),
        catchError(this.handleError<any>('updateSquare'))
      );
  }

  getGame(id: string): Observable<Gameresults> {
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
        tap(_=> this.log(`saved game id=${game._id}`)),
        catchError(this.handleError<any>('updateGame'))
      );
  }

  addGame(game: Gameresults): Observable<Gameresults> {
    const url = `${this.gamesUrl}/add/`;
    return this.http.post<Gameresults>(url, game, httpOptions)
      .pipe(
        tap((game: Gameresults) => this.log(`added game w/ id=${game._id}`)),
        catchError(this.handleError<Gameresults>('addGame'))
      );
  }

  // deleteGame(game: Gameresults | string): Observable<Gameresults> {
  deleteGame(game: Gameresults): Observable<Gameresults> {
    // const id = typeof game === 'string' ? game : game._id;
    // const id = game._id;
    const url = `${this.gamesUrl}/delete/${game._id}`;
    console.log(url);
    return this.http.delete<Gameresults>(url, httpOptions)
      .pipe(
        tap(_=> this.log(`deleted game id=${game._id}`)),
        catchError(this.handleError<Gameresults>('deleteGame'))
      );
  }

  addWinner(game: Winningnumbers): Observable<Winningnumbers> {
    return this.http.post<Winningnumbers>(this.winningNumsUrl, game, httpOptions)
      .pipe(
        tap((game: Winningnumbers) => this.log(`added game w/ id=${game.game}`)),
        catchError(this.handleError<Winningnumbers>('addGame'))
      );
  }

  addSquare(square: Squareresults): Observable<Squareresults> {
      const url = `${this.squaresUrl}/add/`;
      return this.http.post<Squareresults>(url, square, httpOptions)
      .pipe(
        tap((Square: Squareresults) => this.log(`added Square w/ id=${Square._id}`)),
        catchError(this.handleError<Squareresults>('addSquare'))
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
