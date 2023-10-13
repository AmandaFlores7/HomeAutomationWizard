import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntasServiceService } from './preguntas-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private preguntas_s: PreguntasServiceService) { }

  signIn(usuario: { rut: string; }) {
    const usuarioLocal: { rut: string; } | null = JSON.parse(localStorage.getItem('usuario') || 'null');
    if (usuarioLocal && usuarioLocal.rut === usuario.rut) {
      this.router.navigate(['/introduccion/4']);
    } else {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      this.preguntas_s.cargarPreguntas();
      this.router.navigate(['/introduccion/1']);
    }
  }
}
