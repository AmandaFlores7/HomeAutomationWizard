import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjetivosAprendizajeComponent } from './objetivos-aprendizaje/objetivos-aprendizaje.component';
import { ContenidoWikiComponent } from './contenido-wiki/contenido-wiki.component';
import { LeccionComponent } from './leccion/leccion.component';
import { MenuOpcionesComponent } from 'src/app/componentes/menu-opciones/menu-opciones.component';

const routes: Routes = [
  { path: 'leccion1', component: ObjetivosAprendizajeComponent },
  { path: 'leccion2', component: LeccionComponent},
  { path: 'leccion2/1', component: ContenidoWikiComponent},
  { path: 'leccion2/2', component: ContenidoWikiComponent},
  { path: 'leccion3', component: MenuOpcionesComponent},
  { path: 'leccion3/1', component: ContenidoWikiComponent},
  { path: 'leccion3/2', component: ContenidoWikiComponent},
  { path: 'leccion4', component: MenuOpcionesComponent},
  { path: 'leccion4/1', component: ContenidoWikiComponent},
  { path: 'leccion4/2', component: ContenidoWikiComponent},
  { path: 'leccion4/3', component: ContenidoWikiComponent},
  { path: 'leccion4/4', component: ContenidoWikiComponent},
  { path: 'leccion4/5', component: ContenidoWikiComponent},
  { path: 'leccion5', component: LeccionComponent},
  { path: 'leccion6', component: LeccionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiIotRoutingModule { }
