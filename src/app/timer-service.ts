import {EventEmitter} from '@angular/core';

export class TimerService
{
  public timeChanged: EventEmitter<any> = new EventEmitter();
  public timeLimitReached: EventEmitter<any> = new EventEmitter();
  public timeStopped :  EventEmitter<any> = new EventEmitter();

  private TIME_LIMIT: number = 30; // 30 seconds
  private TIME_INTERVAL: number = 1000;  //1 second
  private WAIT_LIMIT: number = 10 * this.TIME_INTERVAL; // 10 seconds

  private timeRemaining:  number = this.TIME_LIMIT;
  private interval: any;

  constructor()
  {
    this.start();
  }

  start()
  {
    this.stop();

    this.interval = setInterval(() => {

          this.timeRemaining--;

          var lapsedTime  = this.TIME_LIMIT - this.timeRemaining;
          var progress = lapsedTime / this.TIME_LIMIT;

          this.timeChanged.emit({progress: progress});

          if (this.timeRemaining === 0)
          {
              this.timeLimitReached.emit("");

              this.wait();

              this.timeRemaining = this.TIME_LIMIT;
          }
        }, this.TIME_INTERVAL);
  }

  wait()
  {
    setTimeout(() =>{

    }, this.WAIT_LIMIT);
  }

  stop()
  {
    if (this.interval !== undefined)
    {
      clearInterval(this.interval);
      this.timeStopped.emit('');
    }
  }
}
