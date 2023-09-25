import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeraParteComponent } from './primera-parte/primera-parte.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RouterModule } from '@angular/router';
import { CarruselComponent } from '../componentes/carrusel/carrusel.component';
import { MenuInfoComponent } from '../componentes/menu-info/menu-info.component';


@NgModule({
  declarations: [
    PrimeraParteComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule.forRoot([
      {path: '1', component: CarruselComponent},
      {path: '2', component: MenuInfoComponent},
    ])
  ],
})
export class IntroduccionModule { }
