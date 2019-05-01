import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment as env } from 'src/environments/environment';

const routes: Routes = [
  {
    path: 'cidades',
    loadChildren: './paginas/cidades/cidades.module#CidadesModule'
  },
  {
    path: 'loteria',
    loadChildren: './paginas/loteria/loteria.module#LoteriaModule'
  },
  { path: '**', redirectTo: env.ROTA_INICIO, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
