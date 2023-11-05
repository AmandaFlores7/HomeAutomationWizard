import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-principal',
  templateUrl: './footer-principal.component.html',
  styleUrls: ['./footer-principal.component.scss'],
})
export class FooterPrincipalComponent {
  @Input() botonDerecho: any;
  @Input() botonIzquierdo: any;
}