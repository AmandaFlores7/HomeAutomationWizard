import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPrincipalComponent } from './componentes/navbar-principal/navbar-principal.component';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { FooterPrincipalComponent } from './componentes/footer-principal/footer-principal.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPrincipalComponent,
    MenuOpcionesComponent,
    FooterPrincipalComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
