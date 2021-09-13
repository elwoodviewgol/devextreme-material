# Routing  
Now that we have the core together. We will now add core routing elements.  
  
## DEFAULT & 404  
APP INDEX (or Module Index) - 'AppIndex' represents the index to the module. In this case we are at the root of the application.  
```
$ ng g c components/appIndex --style=scss  
  
$ ng g c components/appNotFound --style=scss  
```
  
## APP ROOT    

### APP | MODULE | TYPESCRIPT
**app.module.ts**  
```ts  
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// LIBRARY  
import { MaterialModule } from '../assets/libs/material/material.module';
import { DevextremeModule } from '../assets/libs/devextreme/devextreme.module';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS  
import { AppComponent } from './app.component';
import { AppIndexComponent } from './components/app-index/app-index.component'; 
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppIndexComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DevextremeModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```  
  
### APP | COMPONENT | HTML  
```html  
<router-outlet></router-outlet>
```  
  
### APP ROUTING | MODULE | TYPESCRIPT  
```ts  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS  
import { AppIndexComponent } from './components/app-index/app-index.component';
import { AppNotFoundComponent } from './components/app-not-found/app-not-found.component';  


const routes: Routes = [{
  path:'demo', loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
},{
  path: '', component: AppIndexComponent
},{
  path: '**', component: AppNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```  
  
---  
  
## New Module (Routing Only)  

### Generate DEMO Module 
```
$ ng g m demo modules/demo --routing
``` 
  
### Generate DEMO Component  
```  
$ ng g c modules/demo --style=scss --skip-import   
```  

### DEMOMODULE | MODULE | TYPESCRIPT  
```ts  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// LIBRARY  
import { MaterialModule } from '../../../../assets/libs/material/material.module';
import { DevextremeModule } from '../../../../assets/libs/devextreme/devextreme.module'; 

// ROUTING  
import { DemoRoutingModule } from './demo-routing.module';

// COMPONENT 
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }

```  
  
## DEMOMODULE | COMPONENT | TYPESCRIPT  
```ts  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
```  
  
## DEMOMODULE ROUTING | MODULE | TYPESCRIPT  
```ts  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS  
import { DemoComponent } from './demo.component';

const routes: Routes = [{
  path: '',  component: DemoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
```


```html  
<button mat-button routerLinkActive="active" routerLink="/demo">Go To The Demo</button>  
```  
