import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

// LIBRARY  
import { MaterialModule } from '../assets/libs/material/material.module';
import { DevextremeModule } from '../assets/libs/devextreme/devextreme.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module'; 

// COMPONENTS  
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DevextremeModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// -------------------------------------  
// "DevExtreme + Angular Material" project
// Author: Elwood Berry, Senior Frontend Developer @ eberry@viewgol.com
// @2021 