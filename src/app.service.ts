import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSmallLetters(someString: string): string {
    return someString.match(/[a-z]/g).toString();
  }

  getBigLetters(someString: string): string {
    return someString.match(/[A-Z]/g).toString();
  }

  getDigits(someString: string): string {
    return someString.match(/[0-9]/g).toString();
  }

  getSpecialCharacters(someString: string): string {
    return someString.match(/[^a-zA-Z0-9]/g).toString();
  }
}
