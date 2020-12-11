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
    this.http.get(this.gamesUrl).subscribe((res) => {
      this.data = res;
      // console.log(this.data);
      //console.log(Object.values(res));
      console.log(this.data.results[0]);
    });
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
