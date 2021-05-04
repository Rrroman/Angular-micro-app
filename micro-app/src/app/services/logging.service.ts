import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logEventToConsole(action: string): void {
    console.log(action + ' - is happening now!');
  }
}
