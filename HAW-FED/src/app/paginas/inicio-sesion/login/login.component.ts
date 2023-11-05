import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { AuthService } from 'src/app/servicios/auth.service';
import { PreguntasServiceService } from 'src/app/servicios/preguntas-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario = { rut: '', nombre: '', apellido: '', correo: '' };

  preguntas: Pregunta[] = [];

  constructor(
    private renderer: Renderer2,
    private auth_s: AuthService,
    private preguntas_s: PreguntasServiceService,
    private router: Router
  ) {}

  iniciarSesion() {
    const inputRut = document.getElementById('inputRut');
    const inputNombre = document.getElementById('inputNombre');
    const inputApellido = document.getElementById('inputApellido');

    if (this.usuario.nombre === '') {
      this.renderer.addClass(inputNombre, 'is-invalid');
    } else {
      this.renderer.removeClass(inputNombre, 'is-invalid');
    }
    if (this.usuario.apellido === '') {
      this.renderer.addClass(inputApellido, 'is-invalid');
    } else {
      this.renderer.removeClass(inputApellido, 'is-invalid');
    }
    if (!inputRut?.classList.contains('is-valid')) {
      this.renderer.addClass(inputRut, 'is-invalid');
    }

    if (
      inputRut?.classList.contains('is-valid') &&
      this.usuario.nombre !== '' &&
      this.usuario.apellido !== ''
    ) {
      console.log('Iniciando sesión...');
      this.preguntas = this.preguntas_s.getPreguntas();
      this.auth_s.verificarUsuario(this.usuario).subscribe(async (res) => {
        let respuestaTipo = JSON.parse(JSON.stringify(res)).tipo;
        if (respuestaTipo === 'Creado') {
        this.preguntas_s.cargarPreguntas(this.preguntas, respuestaTipo);
          localStorage.setItem('usuario', JSON.stringify(this.usuario));
          this.router.navigate(['/introduccion/1']);
        } else if (respuestaTipo === 'Encontrado') {
          if (localStorage.getItem('usuario') === null) {
            localStorage.setItem('usuario', JSON.stringify(this.usuario));
          }
          this.preguntas_s.obtenerRespuestas(this.usuario.rut).subscribe(
            (respuestas) => {
              console.log('Respuestas obtenidas:', respuestas);
              this.preguntas_s.cargarPreguntas(this.preguntas, respuestaTipo, respuestas.respuestas);
            },
            (error) => {
              console.error('Error al obtener las respuestas:', error);
              // Manejar errores aquí si es necesario
            }
          );
          this.router.navigate(['/introduccion/4']);
        }
      });
    }
  }
}
