import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) {}

  urlMaker(date: number) {
    return `${this.currencyUrl}${date}${this.urlEnding}`;
  }

  getCurrencies(date: string) {
    return this.http.get<Array<Currency>>(date);
  }

  getPickedData(start: any, end: any) {
    console.log(start, end);
  }
}
