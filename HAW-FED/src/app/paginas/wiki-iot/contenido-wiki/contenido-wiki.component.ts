import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-contenido-wiki',
  templateUrl: './contenido-wiki.component.html',
  styleUrls: ['./contenido-wiki.component.scss']
})
export class ContenidoWikiComponent {
  titulo2: any;
  infoPagina: any;
  texto: any;
  imagenes: any;

  constructor(private router: Router) {
    this.infoPagina = this.buscarTitulo(this.router.url);
    this.titulo2 = this.infoPagina['titulo2'];
    this.texto = this.infoPagina['texto'];
    this.imagenes = this.infoPagina['imagenes'];    
  }

  buscarTitulo(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }
}
