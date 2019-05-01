import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoteriaRoutingModule } from './loteria-routing.module';
import { LoteriaComponent } from './loteria.component';
import { TabelaModule } from 'src/app/componentes/tabela/tabela.module';
import { MatMenuModule, MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoteriaComponent ],
  imports: [
      CommonModule
    , TabelaModule
    , MatMenuModule
    , MatCardModule
    , MatIconModule
    , MatButtonModule
    , ReactiveFormsModule
    , MatInputModule
    , MatFormFieldModule
    , LoteriaRoutingModule
  ]
})
export class LoteriaModule { }
