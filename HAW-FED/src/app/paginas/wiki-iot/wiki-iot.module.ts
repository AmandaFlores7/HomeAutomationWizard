import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiIotRoutingModule } from './wiki-iot-routing.module';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';
import { ContenidoWikiComponent } from './contenido-wiki/contenido-wiki.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { LeccionComponent } from './leccion/leccion.component';
import { TabsComponent } from './tabs/tabs.component';
import { MiniInfoDesplegableComponent } from './mini-info-desplegable/mini-info-desplegable.component';

@NgModule({
  declarations: [
    ObjetivosAprendizajeComponent,
    ContenidoWikiComponent,
    LeccionComponent,
    TabsComponent,
    MiniInfoDesplegableComponent
  ],
  imports: [
    CommonModule,
    WikiIotRoutingModule,
    ComponentesModule
  ]
})
export class WikiIotModule { }
