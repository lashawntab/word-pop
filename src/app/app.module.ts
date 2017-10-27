import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardView } from './board-view.component';
import { WordView } from './word-view.component';
import { MatrixView } from './matrix-view.component';
import { TimeProgressView } from './time-progress-view.component';
import { CharacterView } from './character-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardView, 
    WordView, 
    MatrixView, 
    TimeProgressView, 
    CharacterView
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
