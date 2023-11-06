import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesPaginasRoutingModule } from './componentes-paginas-routing.module';
import { FormsModule } from '@angular/forms';

import { VistaComponenteComponent } from './vista-componente/vista-componente.component';
import { ControlPuertaComponent } from './control-puerta/control-puerta.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProbarCamaraComponent } from './probar-camara/probar-camara.component';
import { ProbarLuzComponent } from './probar-luz/probar-luz.component';
import { TextoScrollComponent } from './texto-scroll/texto-scroll.component';
import { ComponentesModule } from 'src/app/componentes/componentes.module';


@NgModule({
  declarations: [
    VistaComponenteComponent,
    ControlPuertaComponent,
    LineChartComponent,
    ProbarCamaraComponent,
    ProbarLuzComponent,
    TextoScrollComponent
  ],
  imports: [
    CommonModule,
    ComponentesPaginasRoutingModule,
    FormsModule,
    ComponentesModule
  ]
})
export class ComponentesPaginasModule { }
