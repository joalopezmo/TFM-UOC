import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
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
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  schemeType = 'linear';
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  animations = true;
  view: [number, number] = [500, 300];
  facturacion = [
    {
      name: 'Facturación',
      series: [
        {
          name: 'jul-22',
          value: 3,
        },
        {
          name: 'ago-22',
          value: 38,
        },
      ],
    },
  ];
  conceptosFacturacion = [
    {
      name: 'Laboratorio',
      series: [
        {
          name: 'jul-22',
          value: 3,
        },
        {
          name: 'ago-22',
          value: 38,
        },
      ],
    },
  ];

  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 },
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 1, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 },
  //     ];
  //   })
  // );
  constructor(
    // private breakpointObserver: BreakpointObserver,
    private monthReportService: MonthReportService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  callApi() {
    this.monthReportService.getMonthReport().subscribe((data) => {
      this.test = data as sheetInfo[];
      const factMensualData = this.getProperties(this.test[23]);
      const conceptosLab = this.getProperties(this.test[3]);
      const conceptosMedicamentos = this.getProperties(this.test[4]);
      const conceptosMateriales = this.getProperties(this.test[5]);
      const factMensual = this.organizeData(
        factMensualData[0],
        factMensualData[1]
      );
      const conceptosLabData = this.organizeData(
        conceptosLab[0],
        conceptosLab[1]
      );
      const conceptosMedicamentosData = this.organizeData(
        conceptosMedicamentos[0],
        conceptosMedicamentos[1]
      );
      const conceptosMaterialesData = this.organizeData(
        conceptosMateriales[0],
        conceptosMateriales[1]
      );
      this.facturacion = [
        {
          name: 'Facturación',
          series: factMensual,
        },
      ];
      this.conceptosFacturacion = [
        {
          name: 'Laboratorio',
          series: conceptosLabData,
        },
        {
          name: 'Medicamentos',
          series: conceptosMedicamentosData,
        },
        {
          name: 'Materiales',
          series: conceptosMaterialesData,
        },
      ];
    });
  }

  getProperties(json: sheetInfo) {
    const headers: string[] = json.headers.slice(1);
    const rawData: string[] = json.rawData.slice(1);

    return [headers, rawData];
  }

  organizeData(
    headers: string[],
    rawData: any[]
  ): { name: string; value: any }[] {
    const organizedData: { name: string; value: any }[] = [];

    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      const value = rawData[i];

      organizedData.push({ name: header, value: value });
    }

    return organizedData;
  }
}
