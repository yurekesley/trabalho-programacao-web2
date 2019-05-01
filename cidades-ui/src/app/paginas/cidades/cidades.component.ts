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
}
