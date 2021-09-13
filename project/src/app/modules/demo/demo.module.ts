import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// LIBRARY  
import { MaterialModule } from '../../../assets/libs/material/material.module';
import { DevextremeModule } from '../../../assets/libs/devextreme/devextreme.module'; 

// ROUTING  
import { DemoRoutingModule } from './demo-routing.module';

// COMPONENT 
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    DevextremeModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }