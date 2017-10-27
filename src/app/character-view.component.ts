import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';
import {UserStatsService} from './user-stats-service';

@Component({
  selector: 'character',
  styleUrls: ['./character-view.scss'],
  template: `
    <div class="character"
         [ngClass]="{'clicked': validClick, 'unclicked': !validClick}"
         (click)="!validClick && onClick($event)">
      {{value}}
    </div>
  `
})
export class CharacterView
{
  @Input() value: string;

  private userStatsService: UserStatsService;
  private validClick: boolean;

  constructor(userStatsService: UserStatsService)
  {
      this.userStatsService = userStatsService;
  }

  onClick(eventArgs: any)
  {
      this.validClick = this.userStatsService.getCurrentRound().validate(this.value);
  }
}
