import {EventEmitter, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TimerService} from './timer-service';

@Injectable()
export class WordService
{
    public wordChanged: EventEmitter<any> = new EventEmitter();

    private word : string = "techie";
    private length : number = this.word.length;

    constructor (http: Http, timerService : TimerService)
    {
        timerService.timeLimitReached.subscribe(
          () => this.getNewWordAsync(http));
        timerService.timeStopped.subscribe(
          () => {
            this.setAndNotify(null)
          });
    }

    getCurrent()
    {
      return this.word;
    }

    getNewWordAsync(http:  Http)
    {
      return http.get('http://randomword.setgetgo.com/get.php?len=' + this.length)
                 .map(res => res.text())
                 .subscribe((data) =>
                   {
                     this.setAndNotify(data);
                   });
    }

    setAndNotify(value : string)
    {
      this.word = value;
      this.wordChanged.emit("");
    }
}
