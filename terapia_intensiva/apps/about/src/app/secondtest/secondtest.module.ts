import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialUiModule } from '@terapia-intensiva/shared/material-ui';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { SecondtestComponent } from './secondtest.component';
const TESTROUTES: Routes = [
  {
    path: '',
    component: SecondtestComponent,
  },
];

@NgModule({
  declarations: [SecondtestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TESTROUTES),
    SharedMaterialUiModule,
    NgChartsModule,
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false } },
  ],
})
export class SecondtestModule {}
