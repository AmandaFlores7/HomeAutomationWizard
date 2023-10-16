import { Component, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = { rut: '', correo: '' };

  constructor(private renderer: Renderer2, private auth_s: AuthService) { }

  iniciarSesion() {
    const elemento = document.getElementById('imputRut');

    if (elemento?.classList.contains('is-valid')) {
      this.auth_s.signIn(this.usuario);
    } else {
      this.renderer.addClass(elemento, 'is-invalid');
    }
    
  }

}
