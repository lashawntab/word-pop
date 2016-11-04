import {Component, Output, EventEmitter} from '@angular/core';
import {TimeProgressView} from './time-progress-view.component';
import {WordService} from './word-service';

@Component({
  selector: 'word',
  styles:[require('./word-view.scss')],
  template: `
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="panel-content">
            <time-progress></time-progress>
            <div>
              {{word}}
            </div>
          </div>
        </div>
      </div>`
})
export class WordView
{
  private word: string;

  constructor(wordService:  WordService)
  {
     this.word = wordService.getCurrent();

     wordService.wordChanged.subscribe(()=>
     {
        this.word = wordService.getCurrent();
     });
  }
}
