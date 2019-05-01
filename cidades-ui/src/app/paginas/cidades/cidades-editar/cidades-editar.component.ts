import { CidadesService } from './../cidades.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { marcarComoTocado, error } from 'src/app/util/funcoes.util';
import { Cidade } from 'src/app/model/cidade';

@Component({
  selector: 'app-cidades-editar',
  templateUrl: './cidades-editar.component.html',
  styleUrls: ['./cidades-editar.component.scss']
})
export class CidadesEditarComponent implements OnInit, AfterContentInit {

public cidade: Cidade;
public formCidade: FormGroup;

constructor(
    private fb: FormBuilder
  , private router: Router
  , private service: CidadesService
  , private route: ActivatedRoute
  ) {}

ngOnInit() {
 this.criarFormulario();
}

ngAfterContentInit() {
  this.cidade =  new Cidade(this.route.snapshot.data.cidade);
  this.formCidade.patchValue(this.cidade);
}
criarFormulario() {
    this.formCidade = this.fb.group({
      nome: ['', Validators.required],
      uf: ['', Validators.required],
      dataCriacao: ['', Validators.required],
      populacao: [null, Validators.required],
      pib: [null, Validators.required],
    });

  }

  public atualizar() {

  if (this.formCidade.invalid) {
      marcarComoTocado(this.formCidade);
      return;
  }

  const cidade = Object.assign(this.cidade, this.formCidade.value);

  this.service.atualizar(cidade).subscribe(carro => {
    this.router.navigate(['']);
    alert('Atualizado com Sucesso');
  });
  }

public cancelar() {
  this.router.navigate(['']);
}

public mostrarError(controll: AbstractControl): string {
  return error(controll);
}

}
