import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { IGame } from './game';

@Injectable()
export class GameService {
  //private _url: string = '/assets/data/rawg.json';
  private _url: string =
    'https://api.rawg.io/api/games?key=492f4f2d8c064de5a3a0f29205cca636&platforms?genres?name';

  constructor(private http: HttpClient) {}

  getGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(this._url).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('A data error occurred, please try again.');
  }
}
