import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiIotRoutingModule } from './wiki-iot-routing.module';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';
import { ContenidoWikiComponent } from './contenido-wiki/contenido-wiki.component';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  declarations: [
    ObjetivosAprendizajeComponent,
    ContenidoWikiComponent,
  ],
  imports: [
    CommonModule,
    WikiIotRoutingModule,
    ComponentesModule,
  ]
})
export class WikiIotModule { }
