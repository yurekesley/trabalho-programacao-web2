import { Component, OnInit } from '@angular/core';
import { MenuItem } from './componentes/nav-bar/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 public menu: MenuItem[];

  ngOnInit() {
    this.menu =  [
      {
        titulo: 'Cidades', url: null,
        menus: [
        {titulo: 'Listagem', url: 'cidades', menus: null},
        {titulo: 'Novo', url: 'cidades/novo', menus: null}
      ]
    }, {
      titulo: 'Loteria', url: null,
       menus: [
         {titulo: 'Novo Jogo', url: 'loteria', menus: null},
         {titulo: 'Conferir Jogo', url: 'conferir-jogo', menus: null},
      ]
    }
    ];
  }
}
