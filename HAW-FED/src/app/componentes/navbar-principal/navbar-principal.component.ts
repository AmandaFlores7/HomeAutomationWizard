import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.scss']
})
export class NavbarPrincipalComponent {
  @Input() title: string;
  ruta: any;

  constructor(router: Router) {
    this.ruta = router.url;
    this.title = '';
  }

  enrutar(str: string) {
    if (str === 'Home Automation Wizard') {
      return this.ruta.url;
    } else {
      return '/aplicacion';
    }
  }
}
