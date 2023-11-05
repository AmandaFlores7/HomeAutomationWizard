import { Component } from '@angular/core';

import data from 'src/assets/vistaComponente.json';

@Component({
  selector: 'app-vista-componente',
  templateUrl: './vista-componente.component.html',
  styleUrls: ['./vista-componente.component.scss']
})
export class VistaComponenteComponent {
  imagenes: any;
  texto: any;

  constructor() {
    let ruta = window.location.pathname;
    this.obtenerInformacionPagina(ruta);
  }

  obtenerInformacionPagina(linkActual: string) {
    let info = this.buscarRuta(linkActual);
    if (info) {
      this.imagenes = info['imagenes'];
      this.texto = info['texto'];
    }
  }

  buscarRuta(linkActual: string) {
    let info = data.find(element => element.ruta === linkActual);
    if (info) {
      return info;
    }
    return null;
  }
}
