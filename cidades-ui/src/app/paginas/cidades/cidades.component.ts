import { Cidade } from '../../model/cidade';
import { CidadesService } from './cidades.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {

  cidades: Cidade[];
  constructor(
      private service: CidadesService
    , private router: Router) { }

  ngOnInit() {
    this.getCidades();
  }

  getCidades() {
    this.service.get().subscribe(cidades => {
      this.cidades = cidades;
    });
  }


  public deletar(cidade: Cidade) {
    this.service.deletar(cidade).subscribe(res => {

    this.cidades = this.cidades.filter((c) => {
        return c.id !== cidade.id;
    });

    alert('Deletado com Sucesso !');

  });
  }

  public editar(cidade: Cidade) {
    this.router.navigate(['cidades/editar', cidade.id]);
  }
}
