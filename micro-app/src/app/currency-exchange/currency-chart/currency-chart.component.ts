import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss'],
})
export class CurrencyChartComponent implements OnInit {
  chartOptions = {
    responsive: true,

    mode: 'nearest',
    intersect: true,
  };

  chartData = [
    {
      data: [],
      label: 'Currency',
    },
  ];

  chartLabels: Array<string> = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.selectedCurrency.subscribe((currency: string) => {
      this.chartData[0].label = `${currency} - currency rate to UAH`;
      this.chartData[0].data = this.currencyService.ratesData;
      this.chartLabels = this.currencyService.exchangeDate;
    });
  }
}
