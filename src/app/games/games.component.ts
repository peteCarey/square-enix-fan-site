import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../game';
import { GameService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private http: HttpClient, private gameService: GameService) {}

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.gameService.getData();
  }
}
