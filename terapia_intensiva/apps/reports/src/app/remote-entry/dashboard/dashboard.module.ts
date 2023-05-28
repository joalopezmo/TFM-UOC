import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialUiModule } from '@terapia-intensiva/shared/material-ui';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';

import { ColorPickerModule } from 'ngx-color-picker';
import { DashboardComponent } from './dashboard.component';

const DASHBOARDROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedMaterialUiModule,
    NgChartsModule,
    HttpClientModule,
    ColorPickerModule,
    RouterModule.forChild(DASHBOARDROUTES),
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
})
export class DashboardModule {}
