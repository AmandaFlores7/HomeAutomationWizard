import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/servicios/json.service';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss'],
})
export class MenuOpcionesComponent {
  opcionesMenu: any;

  constructor(private router: Router, private jsonService: JsonService) {}

  ngOnInit() {
    this.jsonService.obtenerDatosMenu(this.router.url).subscribe((data) => {
      this.opcionesMenu = data;
    });
  }
}
