import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionModule } from './paginas/introduccion/introduccion.module';
import { PrimeraParteComponent } from './paginas/introduccion/primera-parte/primera-parte.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { MenuInfoComponent } from './componentes/menu-info/menu-info.component';
import { ImagenExplicativaComponent } from './componentes/imagen-explicativa/imagen-explicativa.component';
import { TesteoComponent } from './componentes/testeo/testeo.component';

const routes: Routes = [
  {
    path: 'introduccion',
    component: PrimeraParteComponent,
    children: [
      { path: '1', component: CarruselComponent },
      { path: '2', component: MenuInfoComponent },
      { path: '3', component: ImagenExplicativaComponent },
      { path: '4', component: TesteoComponent },
  ],
  },
  { path: '', redirectTo: '/introduccion/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
