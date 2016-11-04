import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BoardView } from './board-view.component';
import { WordView } from './word-view.component';
import { MatrixView } from './matrix-view.component';
import { TimeProgressView } from './time-progress-view.component';
import { CharacterView } from './character-view.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ BoardView, WordView, MatrixView, TimeProgressView, CharacterView ],
  bootstrap: [ BoardView ]
})
export class MainModule { }