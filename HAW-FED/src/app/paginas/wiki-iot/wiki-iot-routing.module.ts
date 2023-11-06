import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';
import { ContenidoWikiComponent } from './contenido-wiki/contenido-wiki.component';

const routes: Routes = [
  { path: 'leccion1', component: ObjetivosAprendizajeComponent },
  { path: 'leccion1/contenido/1', component:ContenidoWikiComponent},
  { path: 'leccion1/contenido/2', component:ContenidoWikiComponent},
  { path: 'leccion2/contenido/1', component: ContenidoWikiComponent },
  { path: 'leccion2/contenido/2', component: ContenidoWikiComponent },
  { path: 'leccion3/contenido/1', component: ContenidoWikiComponent },
  { path: 'leccion3/contenido/2', component: ContenidoWikiComponent },
  { path: 'leccion3/contenido/3', component: ContenidoWikiComponent },
  { path: 'leccion3/contenido/4', component: ContenidoWikiComponent },
  { path: 'leccion3/contenido/5', component: ContenidoWikiComponent },
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
