import {Component} from '@angular/core';
import {WordView} from './word-view';
import {MatrixView} from './matrix-view';
import {WordService} from './word-service';
import {TimerService} from './timer-service';
import {UserStatsService} from './user-stats-service';

@Component({
  selector: 'board',
  styles: [require('./board-view.scss')],
  template:`
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">
          <div class="content-left">
            {{title}}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.0"
              x="0px"
              y="0px"
              viewBox="0 0 32 32"
              class="icon icons8-Old-Man" >
              <path d="M 16 5 C 13.019197 5 10.389247 6.4764979 8.75 8.71875 C 5.860466 10.098396 4.118634 13.076243 5.46875 16.59375 C 5.1884365 16.995175 5 17.454009 5 18 C 5 19.25867 5.8904725 20.151727 7 20.59375 L 7 21 C 7 24.301625 9.6983746 27 13 27 L 13.90625 27 C 14.450631 27.573108 15.148066 28 16 28 C 16.851934 28 17.549464 27.572467 18.09375 27 L 19 27 C 22.301625 27 25 24.301625 25 21 L 25 20.59375 C 26.109528 20.151727 27 19.25867 27 18 C 27 17.454009 26.811563 16.995175 26.53125 16.59375 C 27.881366 13.076243 26.139534 10.098396 23.25 8.71875 C 21.610753 6.4764979 18.980803 5 16 5 z M 16 7 C 19.877484 7 23 10.122516 23 14 L 23 16 L 23 17 L 24 17 C 24.56503 17 25 17.43497 25 18 C 25 18.56503 24.56503 19 24 19 L 23 19 L 23 20 L 23 21 C 23 23.220375 21.220375 25 19 25 L 17.71875 25 L 17.15625 25 L 16.84375 25.5 C 16.665571 25.805523 16.373641 26 16 26 C 15.626359 26 15.332839 25.803671 15.15625 25.5 L 14.84375 25 L 14.28125 25 L 13 25 C 10.779625 25 9 23.220375 9 21 L 9 20 L 9 19 L 8 19 C 7.4349698 19 7 18.56503 7 18 C 7 17.43497 7.4349698 17 8 17 L 9 17 L 9 16 L 9 14 C 9 10.122516 12.122516 7 16 7 z M 12 15 C 10.906937 15 10 15.906937 10 17 L 10 19 C 10 20.093063 10.906937 21 12 21 L 14 21 C 15.093063 21 16 20.093063 16 19 C 16 20.093063 16.906937 21 18 21 L 20 21 C 21.093063 21 22 20.093063 22 19 L 22 17 C 22 15.906937 21.093063 15 20 15 L 18 15 C 16.906937 15 16 15.906937 16 17 C 16 15.906937 15.093063 15 14 15 L 12 15 z M 12 17 L 14 17 L 14 19 L 12 19 L 12 17 z M 18 17 L 20 17 L 20 19 L 18 19 L 18 17 z"></path>
            </svg>
          </div>
          <div class="content-right">
              {{statsMessage}}
          </div>
        </div>
      </div>
      <div class="panel-body">
        <word></word>
        <matrix></matrix>
        <a href="help.md">How to play</a>
      </div>
    </div>
  `,
  directives: [WordView, MatrixView],
  providers: [WordService, TimerService, UserStatsService]
})
export class BoardView{

  private title:  string;
  private statsMessage: string;
  private rounds: number;
  private tries: number;

  constructor(userStatsService : UserStatsService)
  {
    this.title = "Word Pop";

    userStatsService.changed.subscribe( () =>
    {
        this.statsMessage = userStatsService.getOverallStatsMessage();
    });
  }
}
