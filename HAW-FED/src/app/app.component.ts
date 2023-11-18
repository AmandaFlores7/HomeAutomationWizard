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
  showNavbar = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.obtenerDatosPagina(event.urlAfterRedirects);
      }
      if (event instanceof NavigationEnd) {
        this.showNavbar = this.router.url !== '/splashIntro';
      }
    });
  }

  obtenerDatosPagina(linkActual: string) {
    let info = this.buscarRuta(linkActual);
    if (info) {
      this.titulo = info.titulo;
      this.botonDerecho = null;
      this.botonIzquierdo = null;
      if (info.botones != null) {
        if (info.botones[0]) {
          if ('ruta1' in info.botones[0]) {
            this.botonIzquierdo = info.botones[0].ruta1
              ? { ruta: info.botones[0].ruta1, titulo: info.botones[0].titulo }
              : null;
          } else if ('ruta2' in info.botones[0]) {
            this.botonDerecho = info.botones[0].ruta2
              ? { ruta: info.botones[0].ruta2, titulo: info.botones[0].titulo }
              : null;
          }
        }
        if (info.botones[1] && 'ruta2' in info.botones[1]) {
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
const ipModificables = {
  ip_local: '192.168.2.1',
  ip_local2: '127.0.0.1',
  ip_local3: '192.168.1.83',
  ip_local4: '192.168.0.105',
  api_url: 'http://192.168.2.1:8000',
  api_url2: 'http://127.0.0.1:8000',
  api_url3: 'http://192.168.1.83:8000',
  ws_url: 'ws://192.168.2.1:8000',
  ws_url2: 'ws://127.0.0.1:8000',
  ws_url3: 'ws://192.168.1.83:8000',
  ws_url4: 'ws://192.168.0.105:8000',
  url_camera: 'http://192.168.2.1:8081',
  url_camera2: 'http://127.0.0.1:8081',
  url_camera3: 'http://192.168.1.83:8081'
};
export const CONSTANTES = {
  ip_local: ipModificables.ip_local,
  api_url: ipModificables.api_url,
  ws_url: ipModificables.ws_url,
  url_camera: ipModificables.url_camera,
}