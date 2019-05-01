export class Cidade {
  id: number;
  nome: string;
  uf: string;
  dataCriacao: Date = new Date();
  populacao: number;
  pib: number;

  constructor(init: Partial<Cidade>) {
    if (init) {
     this.dataCriacao = new Date(init.dataCriacao);

     console.log(new Date(init.dataCriacao));
     Object.assign(this, init);
    }
  }
}
