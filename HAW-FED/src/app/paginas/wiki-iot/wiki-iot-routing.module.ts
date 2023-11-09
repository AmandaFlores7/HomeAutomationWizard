import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';
import { ContenidoWikiComponent } from './contenido-wiki/contenido-wiki.component';
import { LeccionComponent } from './leccion/leccion.component';

const routes: Routes = [
  { path: 'leccion1', component: ObjetivosAprendizajeComponent },
  { path: 'leccion2', component: LeccionComponent},
  { path: 'leccion2/1', component: ContenidoWikiComponent},
  { path: 'leccion2/2', component: ContenidoWikiComponent},
  { path: 'leccion3', component: LeccionComponent},
  { path: 'leccion3/1', component: ContenidoWikiComponent},
  { path: 'leccion3/2', component: ContenidoWikiComponent},
  { path: 'leccion4', component: LeccionComponent},
  { path: 'leccion4/1', component: ContenidoWikiComponent},
  { path: 'leccion4/2', component: ContenidoWikiComponent},
  { path: 'leccion4/3', component: ContenidoWikiComponent},
  { path: 'leccion4/4', component: ContenidoWikiComponent},
  { path: 'leccion4/5', component: ContenidoWikiComponent},
  { path: 'leccion5', component: LeccionComponent},
  { path: 'leccion6', component: LeccionComponent},
  // { path: 'leccion1/contenido/1', component:ContenidoWikiComponent},
  // { path: 'leccion1/contenido/2', component:ContenidoWikiComponent},
  // { path: 'leccion2/contenido/1', component: ContenidoWikiComponent },
  // { path: 'leccion2/contenido/2', component: ContenidoWikiComponent },
  // { path: 'leccion3/contenido/1', component: ContenidoWikiComponent },
  // { path: 'leccion3/contenido/2', component: ContenidoWikiComponent },
  // { path: 'leccion3/contenido/3', component: ContenidoWikiComponent },
  // { path: 'leccion3/contenido/4', component: ContenidoWikiComponent },
  // { path: 'leccion3/contenido/5', component: ContenidoWikiComponent },
  // { path: 'leccion4/contenido/1', component: ObjetivosAprendizajeComponent },
  // { path: 'leccion5/contenido/1', component: ObjetivosAprendizajeComponent },
  // { path: 'leccion6/contenido/1', component: ObjetivosAprendizajeComponent },
  // { path: 'leccion7/contenido/1', component: ObjetivosAprendizajeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiIotRoutingModule { }
