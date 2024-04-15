import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmoduleComponent } from './submodule.component';
import { Inside1Component } from './inside1/inside1.component';
import { Inside2Component } from './inside2/inside2.component';

const routes: Routes = [
  {
     path: '', component: SubmoduleComponent,
     children: [
      { path: 'inside1', component: Inside1Component },
      { path: 'inside2', component: Inside2Component}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmoduleRoutingModule { }
