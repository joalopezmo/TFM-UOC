import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { sheetInfo } from '../../models/sheetInfo.model';
import { MonthReportService } from '../../service/month-report.service';

@Component({
  selector: 'terapia-intensiva-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  test!: sheetInfo[];
  headers!: string[];
  concepts: Array<Array<string>> = [];
  dataString: Array<string> = [];
  data!: number[];

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private monthReportService: MonthReportService
  ) {}

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['ene-23', 'feb-23'],
    datasets: [{ data: [1, 4], label: 'Facturación' }],
  };

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  callApi() {
    this.monthReportService.getMonthReport().subscribe((data) => {
      this.test = data as sheetInfo[];
      this.getHeaders();
      this.getConcepts();
      this.obtenerDatosFacturacion();
    });
    this.barChartData.labels = this.headers;
    this.barChartData.datasets[0].data = this.data;
    console.log(this.test);
    console.log(this.data);
    console.log(this.headers);
    this.chart?.update();
  }

  getHeaders() {
    this.headers = this.test[0].headers;
    // console.log(this.headers);
    return this.headers;
  }

  getConcepts() {
    //retornar un array con los primeros elementos de cada arreglo
    const arreglo = this.test.map((element) => {
      return element.rawData[0];
    });
    return arreglo;
  }

  obtenerDatosFacturacion() {
    this.test.forEach((element) => {
      this.concepts.push(element.rawData);
    });
    if (this.concepts.length >= 43) {
      // Retornar todos los elementos del arreglo 42 de concepts excepto el primero
      this.dataString = this.concepts[42].slice(1);
      // Parsear los elementos del arreglo a números
      this.data = this.dataString.map((element) => {
        const numericValue = parseFloat(element.replace(/[^0-9.-]+/g, ''));
        return isNaN(numericValue) ? 0 : numericValue;
      });
      return this.data;
      // console.log(this.dataString);
    } else {
      return console.log('El arreglo concepts no tiene suficientes elementos.');
    }
  }
}
