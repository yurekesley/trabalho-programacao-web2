import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesEditarRoutingModule } from './cidades-editar-routing.module';
import { CidadesEditarComponent } from './cidades-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatDatepickerModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [CidadesEditarComponent],
  imports: [
    CommonModule
    , ReactiveFormsModule
    , RouterModule
    , MatCardModule
    , MatDatepickerModule
    , MatButtonModule
    , MatInputModule
    , MatFormFieldModule
    , CidadesEditarRoutingModule
  ]
})
export class CidadesEditarModule { }
