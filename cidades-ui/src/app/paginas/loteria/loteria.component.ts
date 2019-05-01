import { LoteriaService } from './../../services/loteria.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error, marcarComoTocado } from 'src/app/util/funcoes.util';

@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.component.html',
  styleUrls: ['./loteria.component.scss']
})
export class LoteriaComponent implements OnInit {

 public formLoteria: FormGroup;

 public jogos: any[];

  constructor( private fb: FormBuilder
             , private router: Router
             , private service: LoteriaService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formLoteria = this.fb.group({
      numeroDeJogos: ['', Validators.required],
      numeroDeDezenas: ['', Validators.required]
    });
  }

  public jogar() {
    if (this.formLoteria.invalid) {
      marcarComoTocado(this.formLoteria);
      return;
    }

  }

  public gerarBilhetes() {
    if (this.formLoteria.invalid) {
      marcarComoTocado(this.formLoteria);
      return;
    }

    this.service.gerarBilhete(this.formLoteria.value).subscribe(res => {
        this.jogos = res;
    });

  }
  public cancelar() {
    this.router.navigate(['']);
   }


  public mostrarError(controll: AbstractControl): string {
    return error(controll);
  }

}
