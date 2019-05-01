import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadesComponent } from './cidades.component';
import { CidadesService } from './cidades.service';
import { TabelaModule } from 'src/app/componentes/tabela/tabela.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    CidadesComponent
  ],
  imports: [
      CommonModule
    , TabelaModule
    , CidadesRoutingModule
    , MatMenuModule
    , MatIconModule
    , MatButtonModule
  ], providers: [
    CidadesService
  ]
})
export class CidadesModule { }
