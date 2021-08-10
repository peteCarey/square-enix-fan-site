import { Component, OnInit } from '@angular/core';

import { IGame } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
   public games = [];
  // games = [];
  constructor(private _gameService: GameService) {}

  ngOnInit() {
  //  this._gameService.getGames()
  //    .subscribe(data => console.log(data));
      
      
    this._gameService.getGames()
      .subscribe(data => this.games = data);
      console.log(this.games);
    /*  this.games = this.gameService.getGames();
    console.info(this.games);*/
  }  
}
