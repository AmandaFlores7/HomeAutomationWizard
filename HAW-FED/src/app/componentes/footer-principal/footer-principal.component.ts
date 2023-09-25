import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-principal',
  templateUrl: './footer-principal.component.html',
  styleUrls: ['./footer-principal.component.scss']
})
export class FooterPrincipalComponent {
  @Input() cantidadBotones: number;

  constructor() {
    this.cantidadBotones = 2;
  }
}