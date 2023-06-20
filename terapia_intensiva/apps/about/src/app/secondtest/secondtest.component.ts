import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
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
  view: [number, number] = [500, 300];
  single = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300000,
        },
        {
          name: '2011',
          value: 8940000,
        },
      ],
    },

    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870000,
        },
        {
          name: '2011',
          value: 8270000,
        },
      ],
    },

    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 5000002,
        },
        {
          name: '2011',
          value: 5800000,
        },
      ],
    },
  ];

  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300000,
        },
        {
          name: '2011',
          value: 8940000,
        },
      ],
    },
  ];
  singleOne = [
    {
      name: 'Germany',
      value: 7300000,
    },
  ];

  cardColor = '#232837';

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Mes';
  showYAxisLabel = true;
  yAxisLabel = 'Numero de pacientes';
  yScaleMin = 0;
  yScaleMax = 2.0;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private monthReportService: MonthReportService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  callApi() {
    this.monthReportService.getMonthReport().subscribe((data) => {
      this.test = data as sheetInfo[];
    });
    const pacientesUciData = this.getProperties(this.test[0]);
    const pacientesUceData = this.getProperties(this.test[1]);
    const pacientesGeneralData = this.getProperties(this.test[2]);
    const ocupacionGneralData = this.getProperties(this.test[3]);
    const ocupacionUceData = this.getProperties(this.test[4]);
    const ocupacionUciData = this.getProperties(this.test[5]);
    const UciSerie = this.organizeData(
      pacientesUciData[0],
      pacientesUciData[1]
    );
    const UceSerie = this.organizeData(
      pacientesUceData[0],
      pacientesUceData[1]
    );
    const GeneralSerie = this.organizeData(
      pacientesGeneralData[0],
      pacientesGeneralData[1]
    );
    const ocupacionGneralSerie = this.organizeData(
      ocupacionGneralData[0],
      ocupacionGneralData[1]
    );
    const ocupacionUceSerie = this.organizeData(
      ocupacionUceData[0],
      ocupacionUceData[1]
    );
    const ocupacionUciSerie = this.organizeData(
      ocupacionUciData[0],
      ocupacionUciData[1]
    );

    this.single = [
      {
        name: 'General',
        series: UciSerie,
      },
      {
        name: 'UCE',
        series: UceSerie,
      },
      {
        name: 'UCI',
        series: GeneralSerie,
      },
    ];
    this.multi = [
      {
        name: 'General',
        series: ocupacionGneralSerie,
      },
      {
        name: 'UCE',
        series: ocupacionUceSerie,
      },
      {
        name: 'UCI',
        series: ocupacionUciSerie,
      },
    ];
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
  onSelect(data: any): void {
    //el itme clickeado estara en singleOne
    this.singleOne = [
      {
        name: String(data.name + ' ' + data.series),
        value: data.value,
      },
    ];
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  getConcepts() {
    //retornar un array con los primeros elementos de cada arreglo
    const arreglo = this.test.map((element) => {
      return element.rawData[0];
    });
    return arreglo;
  }
}
