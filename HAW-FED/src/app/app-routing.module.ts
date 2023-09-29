import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionModule } from './paginas/introduccion/introduccion.module';
import { PrimeraParteComponent } from './paginas/introduccion/primera-parte/primera-parte.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { MenuInfoComponent } from './componentes/menu-info/menu-info.component';
import { ImagenExplicativaComponent } from './componentes/imagen-explicativa/imagen-explicativa.component';
import { TesteoComponent } from './componentes/testeo/testeo.component';
import { MenuAplicacionComponent } from './paginas/aplicacion/menu-aplicacion/menu-aplicacion.component';
import { ProbarLuzComponent } from './componentes/probar-luz/probar-luz.component';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { VistaComponenteComponent } from './paginas/aplicacion/vista-componente/vista-componente.component';

const routes: Routes = [
  {
    path: 'introduccion',
    component: PrimeraParteComponent,
    children: [
      { path: '1', component: CarruselComponent },
      { path: '2', component: MenuInfoComponent },
      { path: '3', component: ImagenExplicativaComponent },
      { path: '4', component: ProbarLuzComponent},
  ],
  },
  { path: '', redirectTo: '/introduccion/1', pathMatch: 'full' },
  {
    path: 'aplicacion',
    component: MenuAplicacionComponent,
    children: [
      { path: '', component: MenuOpcionesComponent },
      { path: 'sensores', component: MenuOpcionesComponent },
      { path: 'actuadores', component: MenuOpcionesComponent },
      { path: 'wikiiot', component: MenuOpcionesComponent },
      { path: 'test', component: MenuOpcionesComponent },
      { path: 'acerca', component: MenuOpcionesComponent },
      { path: 'sensores/temperatura', component: VistaComponenteComponent },
      { path: 'sensores/humedad', component: VistaComponenteComponent },
      { path: 'sensores/luz', component: VistaComponenteComponent },
      { path: 'sensores/aire', component: VistaComponenteComponent },
      { path: 'actuadores/camara_r', component: VistaComponenteComponent },
      { path: 'actuadores/luces', component: VistaComponenteComponent },
      { path: 'actuadores/luces/probar', component: ProbarLuzComponent },
      { path: 'actuadores/puerta', component: VistaComponenteComponent }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
