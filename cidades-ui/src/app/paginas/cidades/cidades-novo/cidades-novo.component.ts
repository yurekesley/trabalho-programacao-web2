import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { marcarComoTocado, error } from 'src/app/util/funcoes.util';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/model/cidade';

@Component({
  selector: 'app-cidades-novo',
  templateUrl: './cidades-novo.component.html',
  styleUrls: ['./cidades-novo.component.scss']
})
export class CidadesNovoComponent implements OnInit {

  public formCidade: FormGroup;

constructor(
    private fb: FormBuilder
  , private router: Router
  , private service: CidadesService
  ) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCidade = this.fb.group({
      nome: ['', Validators.required],
      uf: ['', Validators.required],
      dataCriacao: ['', Validators.required],
      populacao: ['', Validators.required],
      pib: ['', Validators.required],
    });
  }

  public salvar() {

    if (this.formCidade.invalid) {
        marcarComoTocado(this.formCidade);
        return;
    }


    this.service.salvar(new Cidade(this.formCidade.value)).subscribe(carro => {
      alert('Carro Salvo com Sucesso');
    });
  }

 public cancelar() {
  this.router.navigate(['']);
 }


  public mostrarError(controll: AbstractControl): string {
    return error(controll);
  }

}
