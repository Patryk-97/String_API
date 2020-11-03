import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSmallLetters(someString: string): string {
    let smallLetters = someString.match(/[a-z]/g);
    return (smallLetters === null ? "" : smallLetters.toString());
  }

  getBigLetters(someString: string): string {
    let bigLetters = someString.match(/[A-Z]/g).toString();
    return (bigLetters === null ? "" : bigLetters.toString());
  }

  getDigits(someString: string): string {
    let digits = someString.match(/[0-9]/g).toString();
    return (digits === null ? "" : digits.toString());
    
  }

  getSpecialCharacters(someString: string): string {
    let specialCharacters = someString.match(/[^a-zA-Z0-9]/g).toString();
    return (specialCharacters === null ? "" : specialCharacters.toString());
  }
}
