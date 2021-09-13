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