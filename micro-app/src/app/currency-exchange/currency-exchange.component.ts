import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.currencyService
      .getCurrencies(this.currencyService.urlMaker(20181111))
      .subscribe((data) => {
        this.currencies = data;
      });
  }
}
