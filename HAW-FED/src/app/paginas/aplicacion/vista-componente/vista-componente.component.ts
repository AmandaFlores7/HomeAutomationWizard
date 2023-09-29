import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-vista-componente',
  templateUrl: './vista-componente.component.html',
  styleUrls: ['./vista-componente.component.scss']
})
export class VistaComponenteComponent {
  imagenes: any;
  texto: string = '';

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (this.router?.url && this.buscarRuta(this.router.url)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.router.url);
      this.imagenes = infoPagina['imagenes'];
      this.texto = infoPagina['texto'];
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
