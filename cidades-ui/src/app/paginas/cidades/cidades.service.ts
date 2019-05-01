import { Cidade } from '../../model/cidade';
import { HttpService } from '../../services/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CidadesService {
  constructor(private http: HttpService) {
  }

  get(): Observable<Cidade[]>  {
    return this.http.get<Cidade>('cidades');
  }

  getByID(id: number): Observable<Cidade> {
   return this.http.getByID<Cidade>('cidades', id);
  }

  salvar(cidade: Cidade): Observable<Cidade> {
   return this.http.post('cidades', cidade);
  }

  deletar(cidade: Cidade): Observable<Cidade> {
    return this.http.delete('cidades', cidade.id);
  }


}
