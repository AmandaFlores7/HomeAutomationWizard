import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeraParteComponent } from './paginas/introduccion/primera-parte/primera-parte.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { MenuInfoComponent } from './componentes/menu-info/menu-info.component';
import { ImagenExplicativaComponent } from './componentes/imagen-explicativa/imagen-explicativa.component';
import { TesteoComponent } from './componentes/testeo/testeo.component';
import { MenuAplicacionComponent } from './paginas/aplicacion/menu-aplicacion/menu-aplicacion.component';
import { ProbarLuzComponent } from './componentes/probar-luz/probar-luz.component';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { VistaComponenteComponent } from './paginas/aplicacion/vista-componente/vista-componente.component';
import { MenuQuizComponent } from './paginas/quiz-conocimiento/menu-quiz/menu-quiz.component';
import { QuizComponent } from './paginas/quiz-conocimiento/quiz/quiz.component';
import { ProbarCamaraComponent } from './componentes/probar-camara/probar-camara.component';
import { LoginComponent } from './paginas/inicio-sesion/login/login.component';
import { AuthGuard } from './servicios/auth.guard';
import { LineChartComponent } from './componentes/line-chart/line-chart.component';
import { SplashHawComponent } from './componentes/splash-haw/splash-haw.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  { path: 'introduccion', redirectTo: 'introduccion/1'}, 
  {
    path: 'introduccion',
    component: PrimeraParteComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '1', component: CarruselComponent },
      { path: '2', component: MenuInfoComponent },
      { path: '3', component: ImagenExplicativaComponent },
      { path: '4', component: TesteoComponent},
  ],
  },
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashHawComponent },
  {
    path: 'aplicacion',
    component: MenuAplicacionComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MenuOpcionesComponent },
      { path: 'sensores', component: MenuOpcionesComponent },
      { path: 'actuadores', component: MenuOpcionesComponent },
      { path: 'wikiiot', component: MenuOpcionesComponent },
      { path: 'test', component: MenuOpcionesComponent },
      { path: 'acerca', component: MenuOpcionesComponent },
      { path: 'sensores/temperatura', component: VistaComponenteComponent },
      { path: 'sensores/temperatura/ver', component: LineChartComponent },
      { path: 'sensores/humedad', component: VistaComponenteComponent },
      { path: 'sensores/humedad/ver', component: LineChartComponent },
      { path: 'sensores/luz', component: VistaComponenteComponent },
      { path: 'sensores/luz/ver', component:LineChartComponent},
      { path: 'sensores/aire', component: VistaComponenteComponent },
      { path: 'sensores/aire/ver', component: LineChartComponent },
      { path: 'actuadores/camara_r', component: VistaComponenteComponent },
      { path: 'actuadores/luces', component: VistaComponenteComponent },
      { path: 'actuadores/luces/probar', component: ProbarLuzComponent },
      { path: 'actuadores/puerta', component: VistaComponenteComponent },
      { path: 'actuadores/camara_r/probar', component:ProbarCamaraComponent}
      
    ],
  },
  { 
    path: 'quiz',
    component: MenuQuizComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MenuOpcionesComponent },
      { path: 'sensores', component: QuizComponent, data: { tipo: 'sensor' } },
      { path: 'actuadores', component: QuizComponent, data: { tipo: 'actuador' } },
      { path: 'iot', component: QuizComponent, data: { tipo: 'wikiiot' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
