import { Component, Input, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataDevService } from 'src/app/servicios/data-dev.service';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.scss'],
})
export class NavbarPrincipalComponent {
  @Input()
  title = 'Home Automation Wizard';
  ruta: any;
  isDevMode = false;

  showDevOptions = false;

  constructor(private router: Router, private dataDev: DataDevService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.dataDev.setDevModeBool(this.isDevMode);
        if (
          event.urlAfterRedirects.includes('/ver') ||
          event.urlAfterRedirects.includes('/probar')
        ) {
          this.showDevOptions = true;
        } else {
          this.showDevOptions = false;
        }
      }
    });
  }

  enrutar(str: string) {
    if (str === 'Home Automation Wizard') {
      return null;
    } else {
      return '/aplicacion';
    }
  }

  alternarDevMode() {
    this.isDevMode = !this.isDevMode;
    this.dataDev.setDevModeBool(this.isDevMode);
  }
}
