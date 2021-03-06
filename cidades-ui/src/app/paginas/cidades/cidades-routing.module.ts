import { CidadesComponent } from './cidades.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CidadesComponent
  },
  {
    path: 'novo',
    loadChildren: './cidades-novo/cidades-novo.module#CidadesNovoModule'
  },
  {
    path: 'editar',
    loadChildren: './cidades-editar/cidades-editar.module#CidadesEditarModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadesRoutingModule { }
