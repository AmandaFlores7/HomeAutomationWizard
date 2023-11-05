import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


import { ComponentesModule } from './componentes/componentes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizComponent } from './paginas/quiz/quiz.component';
import { LoginComponent } from './paginas/inicio-sesion/login/login.component';

import { RutValidadorDirective } from './directivas/rut-validador.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoginComponent,
    RutValidadorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
