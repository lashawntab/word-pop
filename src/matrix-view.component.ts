import {Component, Input} from '@angular/core';
import {NgFor} from '@angular/common';
import {CharacterView} from './character-view.component';
import {WordService} from './word-service';
import {UserStatsService} from './user-stats-service';

@Component({
  selector: 'matrix',
  styles:[require('./matrix-view.scss')],
  template: `
    <div class="container">
      <div class="row" *ngFor="let row of characters">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" *ngFor="let character of row">
            <character [value]="character"></character>
        </div>
      </div>
    </div>
  `
})
export class MatrixView
{
  private characters : Array<string[]>;
  private userStatsService: UserStatsService;

  constructor(wordService : WordService, userStatsService : UserStatsService)
  {
      this.userStatsService = userStatsService;

      this.update(wordService.getCurrent());

      wordService.wordChanged.subscribe(() =>
        {
          this.update(wordService.getCurrent());
        });
  }

  update(reqChars: string)
  {
    this.characters = new Array();

    if (reqChars)
    {
       reqChars = reqChars.toUpperCase();

       var result = new Array(reqChars.length);
       var allCharacters = "";

       for (var i = 0; i < reqChars.length; i++)
       {
          var row = this.scramble(reqChars.length);

          // plant the character in the string
          row[this.getRandomIndex(row.length-1)] = reqChars[i];

          this.characters.push(row);

          allCharacters += row.join('');
        }

        this.userStatsService.addRound(reqChars, allCharacters);
    }
  }

  scramble(length: number)
  {
    const ALPHABET : string = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
    var result : string = "";

    for (var i = 0; i < length; i++){
      var index = this.getRandomIndex(ALPHABET.length - 1);
      result += ALPHABET[index];
    }

    return result.split('');
  }

  getRandomIndex(maxIndex: number)
  {
    return Math.floor(Math.random() * (maxIndex + 1));
  }

}
