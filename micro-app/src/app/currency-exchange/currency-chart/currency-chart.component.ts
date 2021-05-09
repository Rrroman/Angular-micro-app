import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss'],
})
export class CurrencyChartComponent implements OnInit {
  // chartData: Array<{
  //   data: Array<string>;
  //   label: string;
  // }>;
  selectedCurrency: string = 'USD';
  range: any;

  // chartLabels: Array<string> = [];

  chartOptions = {
    responsive: true,

    mode: 'nearest',
    intersect: true,
  };

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Currency',
    },
  ];

  chartLabels = ['January', 'February', 'March', 'April'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    // this.chartLabels = this.currencyService.range;
    this.range = this.currencyService.getCurrencies('20210101');

    // this.chartData = [
    //   {
    //     data: this.range,
    //     label: `${this.selectedCurrency} - rate to UAH`,
    //   },
    // ];

    this.currencyService.selectedCurrency.subscribe((currency: string) => {
      this.selectedCurrency = currency;
      this.chartData[0].label = `${currency} - currency rate to UAH`;
    });
  }
}
