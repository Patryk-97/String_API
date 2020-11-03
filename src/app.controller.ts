import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:someString')
  getAllCharactersInfo(@Param('someString') someString: string): string {
    return this.appService.getAllCharactersInfo(someString);
  }

  @Get('smallLetters/:someString')
  getSmallLettersInfo(@Param('someString') someString: string): string {
    return this.appService.getSmallLettersInfo(someString);
  }

  @Get('bigLetters/:someString')
  getBigLettersInfo(@Param('someString') someString: string): string {
    return this.appService.getBigLettersInfo(someString);
  }

  @Get('digits/:someString')
  getDigitsInfo(@Param('someString') someString: string): string {
    return this.appService.getDigitsInfo(someString);
  }

  @Get('specialCharacters/:someString')
  getSpecialCharactersInfo(@Param('someString') someString: string): string {
    return this.appService.getSpecialCharactersInfo(someString);
  }
}
