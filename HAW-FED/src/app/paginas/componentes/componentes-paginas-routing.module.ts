import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponenteComponent } from './vista-componente/vista-componente.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ProbarLuzComponent } from './probar-luz/probar-luz.component';
import { ControlPuertaComponent } from './control-puerta/control-puerta.component';
import { ProbarCamaraComponent } from './probar-camara/probar-camara.component';
import { MenuOpcionesComponent } from 'src/app/componentes/menu-opciones/menu-opciones.component';
import { ControlActuadoresComponent } from './control-actuadores/control-actuadores.component';
import { Led, Puerta } from 'src/app/models/actuador';

const routes: Routes = [
  { path: 'sensores', component: MenuOpcionesComponent },
  { path: 'actuadores', component: MenuOpcionesComponent },
  { path: 'sensores/temperatura', component: VistaComponenteComponent },
  { path: 'sensores/temperatura/ver', component: LineChartComponent, data: { tipoSensor: 'temperature', tituloGrafico: 'Gráfico de Temperatura' } },
  { path: 'sensores/humedad', component: VistaComponenteComponent },
  { path: 'sensores/humedad/ver', component: LineChartComponent, data: { tipoSensor: 'humidity', tituloGrafico: 'Gráfico de Humedad' } },
  { path: 'sensores/luz', component: VistaComponenteComponent },
  { path: 'sensores/luz/ver', component: LineChartComponent, data: { tipoSensor: 'light', tituloGrafico: 'Gráfico de Nivel Luz' } },
  { path: 'sensores/aire', component: VistaComponenteComponent },
  { path: 'sensores/aire/ver', component: LineChartComponent, data: { tipoSensor: 'air_quality', tituloGrafico: 'Gráfico de Calidad Aire' } },
  { path: 'actuadores/camara_r', component: VistaComponenteComponent },
  { path: 'actuadores/luces', component: VistaComponenteComponent },
  { path: 'actuadores/luces/probar', component: ControlActuadoresComponent, data: { tipoActuador: Led } },
  { path: 'actuadores/puerta', component: VistaComponenteComponent },
  { path: 'actuadores/puerta/probar', component: ControlActuadoresComponent, data: { tipoActuador: Puerta } },
  { path: 'actuadores/camara_r/probar', component: ProbarCamaraComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesPaginasRoutingModule { }
