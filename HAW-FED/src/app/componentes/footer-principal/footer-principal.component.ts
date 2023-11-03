import { Component, Input, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-footer-principal',
  templateUrl: './footer-principal.component.html',
  styleUrls: ['./footer-principal.component.scss']
})
export class FooterPrincipalComponent {
  @Input()
  botones: any;
  ruta: any;

  constructor(private router: Router) {
    this.cargarBotones();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cargarBotones();
      }
    });
  }

  cargarBotones() {
    this.ruta = window.location.pathname;
    if (this.router?.url && this.buscarRuta(this.ruta)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.ruta);
      this.botones = infoPagina?.botones? infoPagina.botones : null;
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
