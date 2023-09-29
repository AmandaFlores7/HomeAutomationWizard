import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-principal',
  templateUrl: './footer-principal.component.html',
  styleUrls: ['./footer-principal.component.scss']
})
export class FooterPrincipalComponent {
  @Input()
  ruta1: string | undefined;
  @Input()
  ruta2: string | undefined;

  boton1: boolean | undefined;
  boton2: boolean | undefined;

  constructor(private router: Router) {
    
  }

  verBoton(n: string | undefined) {
    if (n == '') {
      return true;
    }
    return false;
  }
}