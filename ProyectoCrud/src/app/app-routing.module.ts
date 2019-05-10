import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'crear-reg',
    loadChildren: './crear-reg/crear-reg.module#CrearRegPageModule'
  },
  {
    path: 'modificar-reg',
    loadChildren: './modificar-reg/modificar-reg.module#ModificarRegPageModule'
  },
  {
    path: 'visualizar-reg',
    loadChildren: './visualizar-reg/visualizar-reg.module#VisualizarRegPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
