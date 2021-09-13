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


// -------------------------------------  
// "DevExtreme + Angular Material" project
// Author: Elwood Berry, Senior Frontend Developer @ eberry@viewgol.com
// @2021 