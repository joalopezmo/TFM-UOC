import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialUiModule } from '@terapia-intensiva/shared/material-ui';
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
  ],
})
export class SecondtestModule {}
