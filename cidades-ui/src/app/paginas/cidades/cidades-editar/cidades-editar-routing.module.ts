import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CidadesEditarComponent } from './cidades-editar.component';
import { CidadeResolver } from 'src/app/resolvers/cidade.resolver';

const routes: Routes = [
  {
    path: ':id',
    resolve: {
      cidade: CidadeResolver
    },
    component: CidadesEditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadesEditarRoutingModule { }
