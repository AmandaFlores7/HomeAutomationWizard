import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { FooterPrincipalComponent } from './footer-principal/footer-principal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component';

@NgModule({
  declarations: [
    NavbarPrincipalComponent,
    FooterPrincipalComponent,
    MenuOpcionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent
  ],
})
export class ComponentesModule { }
