import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, GamesComponent],
  imports: [BrowserModule, HttpClientModule, routing],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
