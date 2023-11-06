import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { ImagenExplicativaComponent } from './imagen-explicativa/imagen-explicativa.component';
import { TesteoComponent } from './testeo/testeo.component';

const routes: Routes = [
  { path: '1', component: CarruselComponent },
  { path: '2', component: MenuInfoComponent },
  { path: '3', component: ImagenExplicativaComponent },
  { path: '4', component: TesteoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduccionRoutingModule {}
