import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { MenuAplicacionComponent } from './paginas/aplicacion/menu-aplicacion/menu-aplicacion.component';
import { VistaComponenteComponent } from './paginas/aplicacion/vista-componente/vista-componente.component';
import { CarruselImagenesComponent } from './componentes/carrusel-imagenes/carrusel-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuAplicacionComponent,
    VistaComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
