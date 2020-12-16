import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './game';

@Injectable({ providedIn: 'root' })
export class GameService {
  //private gamesUrl = 'http://echo.jsontest.com/key/value/one/two';
  private gamesUrl =
    'https://api.rawg.io/api/games?key=492f4f2d8c064de5a3a0f29205cca636&platforms?genres?name';
  // 'https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132'; // URL to web api
  /*
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
*/
  constructor(private http: HttpClient) {
    // this.getGames();
  }

  /*
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl).pipe(
      tap((_) => console.log('fetched games')),
      catchError(this.handleError<Game[]>('getGames', []))
    );
  */
  games: any = [];
  getGames() {
    return this.http
      .get(this.gamesUrl)
      .toPromise()
      .then((data) => {
        console.log(data);
        let res = data;
        console.log(typeof 'data');
        // games: Game[] = data;
        console.log(data['results'][0].name);

        for (let key in data)
          if (data.hasOwnProperty(key)) this.games.push(data[key]);
        this.games.push(data);
      });
    console.log('Game is ' + this.games);
    // document.getElementById('demo').innerHTML = this.items;
  }

  /*  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl).pipe(
      tap((_) => console.log('fetched games')),
      catchError(this.handleError<Game[]>('getGames', []))
    );
    */
}
