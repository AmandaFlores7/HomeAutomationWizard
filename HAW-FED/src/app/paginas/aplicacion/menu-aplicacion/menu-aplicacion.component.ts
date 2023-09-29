import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-menu-aplicacion',
  templateUrl: './menu-aplicacion.component.html',
  styleUrls: ['./menu-aplicacion.component.scss']
})
export class MenuAplicacionComponent {
  titulo: string = '';
  botones: any;

  constructor(private router: Router) {
    if (this.router?.url && this.buscarRuta(this.router.url)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.router.url);
      this.botones = infoPagina?.botones? infoPagina.botones : null;
      this.titulo = infoPagina?.titulo? infoPagina.titulo : null;
    }
  }

  buscarRuta(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }
}
