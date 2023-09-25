import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';
import { FooterPrincipalComponent } from './footer-principal/footer-principal.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { RouterModule } from '@angular/router';
import { ImagenExplicativaComponent } from './imagen-explicativa/imagen-explicativa.component';
import { TesteoComponent } from './testeo/testeo.component';

@NgModule({
  declarations: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselComponent,
    MenuInfoComponent,
    ImagenExplicativaComponent,
    TesteoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselComponent
  ],
})
export class ComponentesModule { }
