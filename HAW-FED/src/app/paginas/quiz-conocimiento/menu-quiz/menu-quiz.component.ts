import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-menu-quiz',
  templateUrl: './menu-quiz.component.html',
  styleUrls: ['./menu-quiz.component.scss']
})
export class MenuQuizComponent {
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
