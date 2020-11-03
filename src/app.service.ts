import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSmallLetters(someString: string): string {
    return someString.match(/[a-z]/g).toString();
  }
}
