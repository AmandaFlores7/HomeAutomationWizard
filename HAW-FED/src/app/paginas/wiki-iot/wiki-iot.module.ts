import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiIotRoutingModule } from './wiki-iot-routing.module';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';


@NgModule({
  declarations: [
    ObjetivosAprendizajeComponent
  ],
  imports: [
    CommonModule,
    WikiIotRoutingModule
  ]
})
export class WikiIotModule { }
