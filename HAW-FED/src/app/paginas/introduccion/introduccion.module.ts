import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduccionRoutingModule } from './introduccion-routing.module';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { TesteoComponent } from './testeo/testeo.component';
import { ImagenExplicativaComponent } from './imagen-explicativa/imagen-explicativa.component';
import { ModalTextoComponent } from './modal-texto/modal-texto.component';


@NgModule({
  declarations: [
    CarruselComponent,
    MenuInfoComponent,
    ModalTextoComponent,
    TesteoComponent,
    ImagenExplicativaComponent
  ],
  imports: [
    CommonModule,
    IntroduccionRoutingModule
  ]
})
export class IntroduccionModule { }
