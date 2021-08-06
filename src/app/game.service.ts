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
        console.log(data['results'][0].background_image);
        console.log(data['results'][0].genres[0].name);
        console.log(data['results'][0].released);
        console.log(data['results'][0].platforms[0].platform.name);
        console.log(data['results'][0].rating);
        for (let key in data)
          if (data.hasOwnProperty(key)) this.games.push(data[key]);
        this.games.push(data);

        const enix: Game = {
          name: data['results'][0].name,
          image_background: data['results'][0].background_image,
          platform: data['results'][0].platforms[0].platform.name,
          released: data['results'][0].released,
          genre: data['results'][0].genres[0].name,
          rating: data['results'][0].rating,
        };
        console.log('enix is ' + JSON.stringify(enix));
      });
  }

  /*  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl).pipe(
      tap((_) => console.log('fetched games')),
      catchError(this.handleError<Game[]>('getGames', []))
    );
    */
}
