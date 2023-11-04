import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { QuizComponent } from './paginas/quiz/quiz.component';
import { LoginComponent } from './paginas/inicio-sesion/login/login.component';
import { AuthGuard } from './servicios/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'introduccion',
    redirectTo: 'introduccion/1',
  },
  {
    path: 'introduccion',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./paginas/introduccion/introduccion.module').then(
        (m) => m.IntroduccionModule
      ),
  },
  {
    path: '',
    redirectTo: 'aplicacion',
    pathMatch: 'full',
  },
  {
    path: 'aplicacion',
    canActivate: [AuthGuard],
    component: MenuOpcionesComponent,
  },
  {
    path: 'aplicacion',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./paginas/componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'quiz',
    canActivate: [AuthGuard],
    component: MenuOpcionesComponent,
  },
  {
    path: 'quiz',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sensores',
        component: QuizComponent,
        data: { tipo: 'sensor' },
      },
      {
        path: 'actuadores',
        component: QuizComponent,
        data: { tipo: 'actuador' },
      },
      {
        path: 'iot',
        component: QuizComponent,
        data: { tipo: 'wikiiot' },
      },
    ],
  },
  {
    path: 'wikiiot',
    canActivate: [AuthGuard],
    component: MenuOpcionesComponent,
  },
  {
    path: 'wikiiot',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./paginas/wiki-iot/wiki-iot.module').then((m) => m.WikiIotModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
