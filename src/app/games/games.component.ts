import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IGame } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  public games: any = [];
  sub!: Subscription;
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.sub = this.gameService.getGames().subscribe({
      next: (games) => (this.games = games),
    });
    console.log(this.games);
  }
}
