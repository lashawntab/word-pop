export class GameRoundModel
{
    private word: string;
    private allCharacters: string;
    private letterDictionary = [];
    private characterPoints: number = 0;

    constructor(word: string, allCharacters: string)
    {
      this.word = word;
      this.allCharacters = allCharacters;

      word.split('').forEach((character)=>
      {
        if (!(character in this.letterDictionary))
        {
          this.letterDictionary[character] =
            this.count(allCharacters, character);
        }
      });
    }

    getScore()
    {
        return this.getPassed() ? this.characterPoints + 20 : this.characterPoints;
    }

    getPassed()
    {
      for (var key in this.letterDictionary)
      {
          if (this.letterDictionary[key] > 0)
          {
              return false;
          }
      }

      return true;
    }

    validate(character : string)
    {
      if (character.toUpperCase() in this.letterDictionary)
      {
          var count = this.letterDictionary[character];

          if (count > 0)
          {
              this.letterDictionary[character] = count - 1;
              this.characterPoints += 5;
          }

          return true;
      }

      this.characterPoints -= 10;
      return false;
    }

    count(text: string, textToSearch: string)
    {
       var regExp = new RegExp(textToSearch,"gi");
       return text.match(regExp).length;
    }
}
