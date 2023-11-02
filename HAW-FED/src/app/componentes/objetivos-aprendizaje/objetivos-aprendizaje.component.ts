import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-objetivos-aprendizaje',
  templateUrl: './objetivos-aprendizaje.component.html',
  styleUrls: ['./objetivos-aprendizaje.component.scss']
})
export class ObjetivosAprendizajeComponent {
  objetivos: any;
  titulo2: any;
  infoPagina:any;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.infoPagina = this.buscarTitulo(this.router.url);
    this.titulo2 = this.infoPagina['titulo2'];
    this.objetivos = this.infoPagina['objetivos'];       
  }

  buscarTitulo(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }
}
