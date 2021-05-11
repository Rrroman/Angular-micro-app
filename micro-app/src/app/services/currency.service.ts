import { DatePipe, formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  currencyListUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=';
  currencyUrl =
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=';
  urlEnding = '&json';

  selectedCurrency = new EventEmitter<string>();
  selectedCurrencyField: string;
  pickedCurrency: string;

  range: Array<string> = [];
  pickedData: Array<string>;
  currencyData: Array<Currency>;
  allCurrency: Currency[] = [];
  allDates: Array<string>;
  exchangeDate: Array<string> = [];
  ratesData: Array<number> = [];

  constructor(private http: HttpClient) {}

  urlCurrency(
    url: string,
    currencyName: string,
    date: number | string,
    urlEnding: string
  ) {
    return `${url}${currencyName}&date=${date}${urlEnding}`;
  }

  urlMaker(url: string, date: number | string, urlEnding: string) {
    return `${url}${date}${urlEnding}`;
  }

  getCurrencies(date: string): Observable<Currency[]> {
    return this.http.get<Array<Currency>>(date);
  }

  getPickedData(start: string, end: string) {
    const oneSecond = 1000;
    const secondsInOneHour = 3600;
    const hoursInOneDay = 24;
    const millisecondsInOneDay = hoursInOneDay * secondsInOneHour * oneSecond;

    const startDate = new Date(start);
    const endDate = new Date(end);

    this.allCurrency.length = 0;
    this.ratesData.length = 0;
    this.exchangeDate.length = 0;

    for (
      let i = startDate.getTime();
      i <= endDate.getTime();
      i += millisecondsInOneDay
    ) {
      const dateForUrl = formatDate(i, 'yyyyMMdd', 'en-US');

      this.getCurrencies(
        this.urlCurrency(
          this.currencyUrl,
          this.pickedCurrency,
          dateForUrl,
          this.urlEnding
        )
      ).subscribe((data: any) => {
        this.allCurrency.push(...data);
        this.exchangeDate.push(data[0].exchangedate);
        this.ratesData.push(data[0].rate);
      });
    }
  }
}
