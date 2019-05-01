import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {

  constructor(private http: HttpService) { }

  gerarBilhete(jogada): Observable<any> {
    return this.http.post('loteria/gerar-bilhete', jogada);
  }
}
