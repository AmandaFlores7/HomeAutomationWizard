import { Component, Input, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { rutas } from 'src/app/constantes/rutas';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.scss']
})
export class NavbarPrincipalComponent {
  title = 'Home Automation Wizard';
  ruta: any;
  isDevMode = false;

  showDevOptions = false;

  constructor(private router: Router) {
    this.cambiarTitulo();
  }

  cambiarTitulo() {
    this.ruta = window.location.pathname;
    if (this.ruta && this.buscarRuta(this.ruta)?.titulo != null) {
      let infoPagina = this.buscarRuta(this.ruta);
      this.title = infoPagina?.titulo? infoPagina.titulo : null;
    }
    // si ruta contiene el ver o probar en su contenido, mostrar devOption
    if (this.ruta.includes('/ver') || this.ruta.includes('/probar')) {
      this.showDevOptions = true;
    } else {
      this.showDevOptions = false;
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.cambiarTitulo();
      }
    });
  }

  buscarRuta(linkActual: string) {
    let info = JSON.parse(JSON.stringify(rutas))[linkActual];
    if (info) {
      return info;
    }
    return null;
  }

  enrutar(str: string) {
    if (str === 'Home Automation Wizard') {
      return this.ruta.url;
    } else {
      return '/aplicacion';
    }
  }

  alternarDevMode() {
    this.isDevMode = !this.isDevMode;
  }
}
