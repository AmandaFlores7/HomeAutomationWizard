import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { FooterPrincipalComponent } from './footer-principal/footer-principal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';
import { CarruselImagenesComponent } from './carrusel-imagenes/carrusel-imagenes.component';

@NgModule({
  declarations: [
    NavbarPrincipalComponent,
    FooterPrincipalComponent,
    MenuOpcionesComponent,
    CarruselImagenesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselImagenesComponent
  ],
})
export class ComponentesModule { }
