import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Currency, CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss'],
})
export class CurrencyExchangeComponent implements OnInit {
  currencies: Array<Currency>;
  selectedCurrency: string;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    const dateToGetCurrencyNames = 20210511;

    this.currencyService
      .getCurrencies(
        this.currencyService.urlMaker(
          this.currencyService.currencyListUrl,
          dateToGetCurrencyNames,
          this.currencyService.urlEnding
        )
      )
      .subscribe((data) => {
        this.currencies = data;
      });
  }

  onSelect(selectedCurrency: string): void {
    this.currencyService.pickedCurrency = selectedCurrency;
    this.currencyService.selectedCurrency.emit(selectedCurrency);
  }

  onDatePick(start: HTMLInputElement, end: HTMLInputElement) {
    this.currencyService.getPickedData(start.value, end.value);
  }
}
