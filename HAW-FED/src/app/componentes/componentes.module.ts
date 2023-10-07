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
import { ProbarLuzComponent } from './probar-luz/probar-luz.component';
import { FormsModule } from '@angular/forms';
import { CarruselImagenesComponent } from './carrusel-imagenes/carrusel-imagenes.component';
import { TextoScrollComponent } from './texto-scroll/texto-scroll.component';
import { ModalTextoComponent } from './modal-texto/modal-texto.component';
import { ProbarCamaraComponent } from './probar-camara/probar-camara.component';

@NgModule({
  declarations: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselComponent,
    MenuInfoComponent,
    ImagenExplicativaComponent,
    TesteoComponent,
    ProbarLuzComponent,
    CarruselImagenesComponent,
    TextoScrollComponent,
    ModalTextoComponent,
    ProbarCamaraComponent    
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
    CarruselComponent,
    CarruselImagenesComponent,
    TextoScrollComponent
  ],
})
export class ComponentesModule { }
