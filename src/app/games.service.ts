import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Game } from './game';

@Injectable({ providedIn: 'root' })
export class GameService {
  private data: any = [];
  private gamesUrl = 'https://api.rawg.io/api/games';
  // 'https://api.rawg.io/api/games?dates=2010-01-01,2020-12-31&developers=4132'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<GameResponse>(this.gamesUrl).pipe(
      map((response) => {
        console.log(response);
        return response.Game;
      })
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // console.log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

interface GameResponse {
  Game: Game[];
}
