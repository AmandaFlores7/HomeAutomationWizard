import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';
import { VistaComponenteComponent } from '../componentes/vista-componente/vista-componente.component';

const routes: Routes = [
  { path: 'leccion1', component: ObjetivosAprendizajeComponent },
  { path: 'leccion1/contenido/1', component: VistaComponenteComponent},
  { path: 'leccion1/contenido/2', component: VistaComponenteComponent},
  { path: 'leccion2', component: ObjetivosAprendizajeComponent },
  { path: 'leccion3', component: ObjetivosAprendizajeComponent },
  { path: 'leccion4', component: ObjetivosAprendizajeComponent },
  { path: 'leccion5', component: ObjetivosAprendizajeComponent },
  { path: 'leccion6', component: ObjetivosAprendizajeComponent },
  { path: 'leccion7', component: ObjetivosAprendizajeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiIotRoutingModule { }
