import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-menu-aplicacion',
  templateUrl: './menu-aplicacion.component.html',
  styleUrls: ['./menu-aplicacion.component.scss']
})
export class MenuAplicacionComponent {
  ruta1: string = '';
  ruta2: string = '';
  titulo: string = '';
  opcionesMenu: '';

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    let infoPagina = this.buscarTitulo(this.router.url);

    if (this.router && this.buscarTitulo(this.router.url)) {
      this.titulo = infoPagina.titulo;
      this.asignarBotones(infoPagina.botones)
    }

    this.opcionesMenu = infoPagina['items'];

  }

  buscarTitulo(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }

  asignarBotones(infoPagina: any) {
    if (infoPagina.ruta1) {
      this.ruta1 = infoPagina.ruta1.link;
    }
    if (infoPagina.ruta2) {
      this.ruta2 = infoPagina.ruta2.link;
    }
  }
  
}
