import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class PreguntasServiceService {
  apiUrl = CONSTANTES.api_url;

  constructor(private http: HttpClient) {}

  getPreguntas() {
    let preguntas: Pregunta[] = [];
    let preguntasObs: Observable<any> = this.http.get(
      `${this.apiUrl}/preguntas`
    );
    preguntasObs.subscribe(
      (resultado) => {
        resultado.preguntas.forEach((pregunta: any) => {
          let alternativas: string[] = pregunta.alternativas.split('&');
          preguntas.push({
            id: pregunta.id,
            tipo: pregunta.tipo,
            pregunta: pregunta.pregunta,
            respuesta: pregunta.respuesta,
            alternativas: alternativas,
            respondida: false,
          });
        });
      },
      (error) => {
        console.error('Error al realizar la solicitud:', error);
        // Manejar errores aquí si es necesario
      }
    );
    return preguntas;
  }

  cargarPreguntas(preguntas: Pregunta[], tipo: string, respuestas?: number[]): void {
    if (tipo === 'Creado') {
      localStorage.setItem('preguntas', JSON.stringify(preguntas));
      return
    }
    let preguntasLocal: Pregunta[] = JSON.parse(localStorage.getItem('preguntas') || '[]');

    preguntas.forEach((pregunta: Pregunta) => {
      const preguntaExistente = preguntasLocal.find(p => p.id === pregunta.id);

      if (preguntaExistente) {
        if (respuestas && respuestas.includes(pregunta.id)) {
          preguntaExistente.respondida = true;
        }
      }
      else {
        if (respuestas && respuestas.includes(pregunta.id)) {
          pregunta.respondida = true;
        }
        preguntasLocal.push(pregunta);
      }
    });

    localStorage.setItem('preguntas', JSON.stringify(preguntasLocal));
  }

  obtenerPreguntasLS(): any {
    return JSON.parse(localStorage.getItem('preguntas') || 'null');
  }

  actualizarPregunta(tipo: string, id: number): void {
    if (tipo === 'respondida') {
      let preguntas = JSON.parse(localStorage.getItem('preguntas') || 'null');
      let estudiante = JSON.parse(localStorage.getItem('usuario') || 'null');
      preguntas.forEach((pregunta: Pregunta) => {
        if (pregunta.id === id) {
          if (pregunta.respondida === false) {
            pregunta.respondida = true;
            const datos = {
              preguntaId: pregunta.id,
              rutUsuario: estudiante.rut
            };
            this.http.post(`${this.apiUrl}/preguntas/actualizar`, datos).subscribe(
              (resultado) => {
                console.log('Pregunta actualizada:', resultado);
              },
              (error) => {
                console.error('Error al realizar la solicitud:', error);
                // Manejar errores aquí si es necesario
              }
            );
          }
        }
      });
      localStorage.setItem('preguntas', JSON.stringify(preguntas));
    }
  }

  obtenerRespuestas(rutUsuario: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/respuestas/${rutUsuario}`);
  }
}
