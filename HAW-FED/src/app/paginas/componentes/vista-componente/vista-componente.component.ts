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

  ruta: any;

  constructor(private router: Router) {
    this.ruta = window.location.pathname;
    if (this.router?.url && this.buscarRuta(this.ruta)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.ruta);
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
