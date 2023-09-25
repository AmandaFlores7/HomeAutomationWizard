import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionModule } from './introduccion/introduccion.module';
import { PrimeraParteComponent } from './introduccion/primera-parte/primera-parte.component';

const routes: Routes = [
  { path: 'introduccion',
    component: PrimeraParteComponent,
    children: [
      { path: 'introduccion', 
      component: PrimeraParteComponent
    }]
  },
  { path: '', 
    redirectTo: '/introduccion', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
