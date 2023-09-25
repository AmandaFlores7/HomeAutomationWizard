import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.scss']
})
export class NavbarPrincipalComponent {
  @Input() title: string;

  constructor() {
    this.title = '';
  }
}
