import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

//importar json
import data from 'src/assets/titulo-botonones.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'haw-frontend';
  botonDerecho: any;
  botonIzquierdo: any;
  titulo: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.obtenerDatosPagina(event.urlAfterRedirects);
      }
    });
  }

  obtenerDatosPagina(linkActual: string) {
    let info = this.buscarRuta(linkActual);
    if (info) {
      this.titulo = info.titulo;
      console.log(info);
      this.botonDerecho = null;
      this.botonIzquierdo = null;
      if (info.botones) {
        if (info.botones.length > 0) {
          this.botonIzquierdo = info.botones[0].ruta1
            ? { ruta: info.botones[0].ruta1, titulo: info.botones[0].titulo }
            : null;
          this.botonDerecho = info.botones[0].ruta2
            ? { ruta: info.botones[0].ruta2, titulo: info.botones[0].titulo }
            : null;
        }
        if (info.botones.length > 1) {
          this.botonDerecho = info.botones[1].ruta2
            ? { ruta: info.botones[1].ruta2, titulo: info.botones[1].titulo }
            : null;
        }
      }
    }
  }

  buscarRuta(linkActual: string) {
    let info = data.find((element) => element.ruta === linkActual);
    if (info) {
      return info;
    }
    return null;
  }
}
