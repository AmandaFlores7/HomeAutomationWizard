import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';
import { FooterPrincipalComponent } from './footer-principal/footer-principal.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselComponent
  ],
})
export class ComponentesModule { }
