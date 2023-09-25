import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-principal',
  templateUrl: './footer-principal.component.html',
  styleUrls: ['./footer-principal.component.scss']
})
export class FooterPrincipalComponent {
  @Input() cantidadBotones: number;
  @Input() ruta1: string | undefined;
  @Input() ruta2: string | undefined;

  constructor(private router: Router) {
    this.cantidadBotones = 2;
  }
}