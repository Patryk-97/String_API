import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSmallLetters(someString: string): string[] {
    return someString.match(/[a-z]/g);
  }

  getBigLetters(someString: string): string[] {
    return someString.match(/[A-Z]/g);
  }

  getDigits(someString: string): string[] {
    return someString.match(/[0-9]/g);
  }

  getSpecialCharacters(someString: string): string[] {
    return someString.match(/[^a-zA-Z0-9]/g);
  }

  getSmallLettersInfo(someString: string): string {
    let smallLetters = this.getSmallLetters(someString);
    if (smallLetters) {
      return "Small letters: count:" + smallLetters.length + "; " + smallLetters + "]";
    }
    return "Small letters: count: 0";
  }

  getBigLettersInfo(someString: string): string {
    let bigLetters = this.getBigLetters(someString);
    if (bigLetters) {
      return "Big letters: count: " + bigLetters.length + "; [" + bigLetters + "]";
    }
    return "Big letters: count: 0";
  }

  getDigitsInfo(someString: string): string {
    let digits = this.getDigits(someString);
    if (digits) {
      return "Digits: count:" + digits.length + "; [" + digits + "]";
    }
    return "Digits: count: 0";
  }

  getSpecialCharactersInfo(someString: string): string {
    let specialCharacters = this.getSpecialCharacters(someString);
    if (specialCharacters) {
      return "Special characters: count: " + specialCharacters.length + "; [" + specialCharacters + "]";
    }
    return "Special characters: count: 0";
  }

  getAllCharactersInfo(someString: string): string {
    let allCharactersInfo = this.getSmallLettersInfo(someString) + '<br/>';
    allCharactersInfo += this.getBigLettersInfo(someString) + '<br/>';
    allCharactersInfo += this.getDigitsInfo(someString) + '<br/>';
    allCharactersInfo += this.getSpecialCharactersInfo(someString);
    return allCharactersInfo;
  }
}
