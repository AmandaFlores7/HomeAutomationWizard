import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeraParteComponent } from './primera-parte/primera-parte.component';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [
    PrimeraParteComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class IntroduccionModule { }
