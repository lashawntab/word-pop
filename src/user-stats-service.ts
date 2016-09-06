import {EventEmitter, Injectable} from '@angular/core';
import {GameRoundModel} from './game-round-model';
import {TimerService} from './timer-service';

@Injectable()
export class UserStatsService
{
    public changed: EventEmitter<any> = new EventEmitter();

    private TRY_LIMIT : number = 3;
    private games : GameRoundModel[] = new Array();
    private timerService:  TimerService;
    private statusMessage : string;

    constructor(timerService:  TimerService)
    {
        this.timerService = timerService;
    }

    getCurrentRound()
    {
        return this.games.length > 0 ? this.games[this.games.length - 1] : null;
    }

    addRound(word : string, characters: string)
    {
      if (this.canContinueToPlay())
      {
        let  model : GameRoundModel = new GameRoundModel(word, characters);
        this.games.push(model);

        this.statusMessage =
               this.getOverallScore() + " points " +
               " in round " + this.games.length +
               " with " + (this.TRY_LIMIT - this.getTryCount()) +
               " tries remaining.";

        this.changed.emit('');

        return model;
      }
      else
      {
        //stop the timer
        this.timerService.stop();

        this.statusMessage = "GAME OVER! Refresh to try again."

        this.changed.emit('');
        return this.getCurrentRound();

      }
    }

    getTryCount()
    {
      var tryCount = 0;

      this.games.forEach((round)=> {
        if (!round.getPassed())
        {
          tryCount++;
        }
      });

      return tryCount;
    }

    canContinueToPlay()
    {
      if (this.getTryCount() < this.TRY_LIMIT)
      {
          return true;
      }

      return false;
    }

    getOverallStatsMessage()
    {
      return this.statusMessage;
    }

    getOverallScore()
    {
      var score = 0;

      this.games.forEach((round)=> {
        score += round.getScore();
      });

      return score;
    }

}
