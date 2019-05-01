import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesNovoRoutingModule } from './cidades-novo-routing.module';
import { CidadesNovoComponent } from './cidades-novo.component';
import { MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [CidadesNovoComponent],
  imports: [
      CommonModule
    , ReactiveFormsModule
    , RouterModule
    , MatCardModule
    , MatDatepickerModule
    , MatButtonModule
    , MatInputModule
    , MatFormFieldModule
    , CidadesNovoRoutingModule
  ]
})
export class CidadesNovoModule { }
