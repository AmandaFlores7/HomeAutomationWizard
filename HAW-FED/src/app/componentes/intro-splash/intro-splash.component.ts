import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-splash',
  templateUrl: './intro-splash.component.html',
  styleUrls: ['./intro-splash.component.scss']
})
export class IntroSplashComponent {
  nombre_boton = 'Iniciar Sesión';
  ruta = '/login'

  ngOnInit() {
    if (localStorage.getItem('usuario')) {
      this.nombre_boton = 'Ir a la Aplicación';
      this.ruta = '/aplicacion'
    }
  }

}
