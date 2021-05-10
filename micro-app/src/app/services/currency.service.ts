import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

export type Currency = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  currencyUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';
  urlEnding = '&json';
  url =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20181111&json';

  selectedCurrency = new EventEmitter<string>();

  range: Array<string> = [];
  pickedData: Array<string>;
  currencyData: Array<Currency>;

  constructor(private http: HttpClient) {}

  urlMaker(date: number) {
    return `${this.currencyUrl}${date}${this.urlEnding}`;
  }

  getCurrencies(date: string) {
    return this.http.get<Array<Currency>>(date);
  }

  getPickedData(start: string, end: string) {
    const oneSecond = 1000;
    const secondsInOneHour = 3600;
    const hoursInOneDay = 24;
    const millisecondsInOneDay = hoursInOneDay * secondsInOneHour * oneSecond;

    const startDate = new Date(start);
    const endDate = new Date(end);

    const tempArr: Array<any> = [];

    for (
      let i = startDate.getTime();
      i <= endDate.getTime();
      i += millisecondsInOneDay
    ) {
      const dateForUrl = parseInt(formatDate(i, 'ddMMyyyy', 'en-US'));
      console.log(dateForUrl);

      tempArr.push(this.getCurrencies(this.urlMaker(dateForUrl)));
    }

    console.log(tempArr);

    // if (start && end) {
    //   const tempArray = [];
    //   tempArray.push(formatDate(start, 'ddMMyyyy', 'en-US'));
    //   tempArray.push(formatDate(end, 'ddMMyyyy', 'en-US'));
    //   this.pickedData = tempArray;
    // }
  }
}
