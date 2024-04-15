import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { 
    path: 'main', 
    loadChildren: () => import('./main/main.module').then(m => m.MainModule) 
  },
  {
    path: 'submodule',
    loadChildren: () => import('./submodule/submodule.module').then(m => m.SubmoduleModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, //appRoutes
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
