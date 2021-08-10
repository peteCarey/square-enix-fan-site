import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';


@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, GamesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
