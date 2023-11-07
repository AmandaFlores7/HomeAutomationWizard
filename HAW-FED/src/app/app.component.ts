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
export const CONSTANTES = {
  ip_local: '127.0.0.1',
  ip_local2: '192.168.2.1',
  api_url: 'http://127.0.0.1:8000',
  api_url2: 'http://192.168.2.1:8000',
  ws_url: 'ws://127.0.0.1:8000',
  ws_url2: 'ws://192.168.2.1:8000',
  url_camera: 'http://127.0.0.1:8081',
  url_camera2: 'http://192.168.2.1:8081'
};
