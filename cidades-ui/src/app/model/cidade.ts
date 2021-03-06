export class Cidade {
  id: number;
  nome: string;
  uf: string;
  dataCriacao: Date = new Date();
  populacao: number;
  pib: number;

  constructor(init: Partial<Cidade>) {
    if (init) {
      init.dataCriacao = new Date(init.dataCriacao);
      Object.assign(this, init);
    }
  }
}
