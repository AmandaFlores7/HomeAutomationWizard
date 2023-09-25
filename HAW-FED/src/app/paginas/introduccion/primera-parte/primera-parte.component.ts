import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './primera-parte.component.html',
  styleUrls: ['./primera-parte.component.scss']
})
export class PrimeraParteComponent{
  ruta1: string | undefined;
  ruta2: string | undefined;
  cantidadBotones: number = 1;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    if (this.router && this.router.url === '/introduccion/1') {
      this.cantidadBotones = 1;
      this.ruta2 = '/introduccion/2';
      console.log(this.ruta2);
    }
    else if (this.router && this.router.url === '/introduccion/2') {
      this.cantidadBotones = 2;
      this.ruta1 = '/introduccion/1';
      this.ruta2 = '/introduccion/3';
    }
    else if (this.router && this.router.url === '/introduccion/3') {
      this.cantidadBotones = 2;
      this.ruta1 = '/introduccion/2';
      this.ruta2 = '/introduccion/4';
    }
    else if (this.router && this.router.url === '/introduccion/4') {
      this.cantidadBotones = 1;
      this.ruta1 = '/introduccion/3';
    } 
  }
}
