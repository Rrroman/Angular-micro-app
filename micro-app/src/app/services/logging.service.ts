export class LoggingService {
  logEventToConsole(action: string): void {
    console.log(action + ' - is happening now!');
  }
}
