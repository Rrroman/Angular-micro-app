import { formatDate } from '@angular/common';
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
  exchangeDate: Array<any> = [];
  ratesData: Array<number> = [];

  constructor(private http: HttpClient) {}

  buildUrlCurrency(
    url: string,
    currencyName: string,
    date: number | string,
    urlEnding: string
  ) {
    return `${url}${currencyName}&date=${date}${urlEnding}`;
  }

  buildUrlForCurrencyNames(
    url: string,
    date: number | string,
    urlEnding: string
  ) {
    return `${url}${date}${urlEnding}`;
  }

  getCurrencies(date: string): Observable<Currency[]> {
    return this.http.get<Array<Currency>>(date);
  }

  async getPickedData(start: string, end: string) {
    const ONE_SECOND = 1000;
    const SECONDS_IN_ONE_HOUR = 3600;
    const HOURS_IN_ONE_DAY = 24;
    const MILLISECONDS_IN_ONE_DAY =
      HOURS_IN_ONE_DAY * SECONDS_IN_ONE_HOUR * ONE_SECOND;

    const startDate = new Date(start);
    const endDate = new Date(end);

    this.allCurrency.length = 0;
    this.ratesData.length = 0;
    this.exchangeDate.length = 0;

    for (
      let i = startDate.getTime();
      i <= endDate.getTime();
      i += MILLISECONDS_IN_ONE_DAY
    ) {
      const dateForUrl = formatDate(i, 'yyyyMMdd', 'en-US');

      await this.getCurrencies(
        this.buildUrlCurrency(
          this.currencyUrl,
          this.pickedCurrency,
          dateForUrl,
          this.urlEnding
        )
      )
        .toPromise()
        .then((data) => {
          this.allCurrency.push(...data);
          this.exchangeDate.push(data[0].exchangedate);
          this.ratesData.push(data[0].rate);
        });
    }
  }
}
