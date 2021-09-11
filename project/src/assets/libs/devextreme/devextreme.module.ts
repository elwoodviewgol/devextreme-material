import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI FORM ELEMENTS
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular';
import { DxTagBoxModule } from 'devextreme-angular';
import { DxTextBoxModule } from "devextreme-angular";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxTagBoxModule,
    DxTextBoxModule
  ],
  exports: [
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxTagBoxModule,
    DxTextBoxModule
  ]
})

export class DevextremeModule { }



// -------------------------------------  
// "DevExtreme + Angular Material" project
// Author: Elwood Berry, Senior Frontend Developer @ eberry@viewgol.com
// @2021 