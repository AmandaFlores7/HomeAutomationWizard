import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss'],
})
export class MenuOpcionesComponent {
  @Input() opciones: any;
  opcionesMenu: any;

  constructor(private router: Router) {
    let infoPagina = this.buscarTitulo(this.router.url);
    this.opcionesMenu = infoPagina['items'];
  }

  buscarTitulo(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }
}
