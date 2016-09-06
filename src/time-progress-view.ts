import {Component, Output, EventEmitter} from '@angular/core';
import {NgStyle} from '@angular/common';
import {TimerService} from './timer-service';

@Component({
  selector: 'time-progress',
  styles:[require('./time-progress-view.scss')],
  template: `
      <div class="content">
        <div class='progress-left' [ngStyle]="{'width': width +'%'}">
        </div>
        <div class='progress-right'[ngStyle]="{'width': width +'%'}">
        </div>
      </div>
  `,
  directives:[NgStyle]
})
export class TimeProgressView
{
  private width: number = 0;

  constructor(timerService : TimerService)
  {
      timerService.timeChanged.subscribe((e)=>
      {
        this.changeProgress(e.progress)
      });
  }

  changeProgress(progress: number)
  {
     this.width = progress  / 2 * 100;
  }
}
