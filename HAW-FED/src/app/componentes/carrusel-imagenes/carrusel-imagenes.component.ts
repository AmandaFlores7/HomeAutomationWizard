import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrusel-imagenes',
  templateUrl: './carrusel-imagenes.component.html',
  styleUrls: ['./carrusel-imagenes.component.scss']
})
export class CarruselImagenesComponent {
  @Input()
  imagenes: any;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
