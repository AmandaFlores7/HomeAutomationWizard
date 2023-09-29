import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  templateUrl: './primera-parte.component.html',
  styleUrls: ['./primera-parte.component.scss']
})
export class PrimeraParteComponent{
  ruta1: string | undefined;
  ruta2: string | undefined;
  botones: any;
  titulo: string = '';

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
