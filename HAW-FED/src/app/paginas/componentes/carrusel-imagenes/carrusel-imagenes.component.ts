import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel-imagenes',
  templateUrl: './carrusel-imagenes.component.html',
  styleUrls: ['./carrusel-imagenes.component.scss'],
})
export class CarruselImagenesComponent {
  @Input()
  imagenes: any;
}
