import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss']
})
export class MenuOpcionesComponent {
  @Input() opciones : any;

}
