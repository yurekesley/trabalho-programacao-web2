import { Cidade } from '../../model/cidade';
import { CidadesService } from './cidades.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {

  cidades: Cidade[];
  constructor(private service: CidadesService) { }

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
}
