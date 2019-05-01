import { CidadesService } from './../paginas/cidades/cidades.service';
import { Cidade } from 'src/app/model/cidade';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CidadeResolver implements Resolve<Observable<Cidade>> {
  constructor(
      private service: CidadesService ) {
    }
  resolve(route: ActivatedRouteSnapshot): Observable<Cidade> {
   const id = route.params.id;
   return this.service.getByID(Number(id));
  }
}
