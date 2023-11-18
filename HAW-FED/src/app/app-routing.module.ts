import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { QuizComponent } from './paginas/quiz/quiz.component';
import { LoginComponent } from './paginas/inicio-sesion/login/login.component';
import { AuthGuard } from './servicios/auth.guard';
import { VistaMensajeriaComponent } from './paginas/mensajeria/vista-mensajeria/vista-mensajeria.component';
import { IntroSplashComponent } from './componentes/intro-splash/intro-splash.component';

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
    redirectTo: 'splashIntro',
    pathMatch: 'full',
  },
  {
    path:'splashIntro',
    component: IntroSplashComponent
  },
  {
    path: 'aplicacion',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MenuOpcionesComponent,
      },
      {
        path: 'mensajeria',
        component: VistaMensajeriaComponent,
      }
    ]
    
  },
  {
    path: 'aplicacion',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./paginas/componentes/componentes-paginas.module').then(
        (m) => m.ComponentesPaginasModule
      ),
  },
  {
    path: 'quiz',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MenuOpcionesComponent,
      },
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
