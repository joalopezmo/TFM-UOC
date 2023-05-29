import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { sheetInfo } from '../../app/models/sheetInfo.model';
import { MonthReportService } from '../../app/service/month-report.service';

@Component({
  selector: 'terapia-intensiva-secondtest',
  templateUrl: './secondtest.component.html',
  styleUrls: ['./secondtest.component.scss'],
})
export class SecondtestComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  test!: sheetInfo[];
  headers: string[] = [];
  concepts: string[] = [];
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
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private monthReportService: MonthReportService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public radarChartType: ChartType = 'radar';
  public radarChartData: ChartData<'radar'> = {
    labels: ['Ocupacion 1', 'Ocupacion 2'],
    datasets: [{ data: [1, 4, 10, 15] }],
  };

  callApi() {
    this.monthReportService.getMonthReport().subscribe((data) => {
      this.test = data as sheetInfo[];
      this.getHeadersDiscretas();

      this.obtenerDatosOcupacion();
    });
    this.radarChartData.labels = this.headers;
    // this.radarChartData.datasets[0].data = parseInt(this.concepts[1]);
    console.log(this.test);
    console.log(this.data);
    console.log(this.headers);
    this.chart?.update();
  }

  getHeadersDiscretas() {
    this.headers = [
      this.test[1].headers[1],
      this.test[1].headers[2],
      this.test[1].headers[3],
    ];
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

  obtenerDatosOcupacion() {
    this.test.forEach((element) => {
      this.concepts.push(
        element.rawData[1],
        element.rawData[2],
        element.rawData[3]
      );
    });

    console.log(this.concepts);
    // meter en la variable concepts las posiciones de la 1 a la 3
  }
}
