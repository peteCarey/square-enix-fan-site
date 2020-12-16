import { Component, OnInit } from '@angular/core';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    // this.gameService.getGames().subscribe((games) => (this.games = games));
    this.gameService.getGames();
    console.log(this.gameService.games);

    let fruits = [];
    fruits = this.gameService.games.slice(3, 4);
    console.info(fruits);
  }

  // items = [];
  /* getGames(): void {
    this.gameService.getGames();
    this.items.push(this.gameService);
    console.info(this.items);
  }
 */
  /*  getGames(): void {
    this.gameService.getGames().subscribe((games) => games);
    console.info(this.gameService);
  }
*/
}
