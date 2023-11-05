import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreguntasServiceService {
  apiUrl = 'http://127.0.0.1:8000';

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

  cargarPreguntas(preguntas: Pregunta[], tipo: string): void {
    if (tipo === 'Creado') {
      localStorage.setItem('preguntas', JSON.stringify(preguntas));
    } else if (tipo === 'Encontrado') {
      let preguntasLocal = JSON.parse(
        localStorage.getItem('preguntas') || 'null'
      );
      // verificar si la pregunta ya existe en el local storage, si no esta, agregar la pregunta
      if (preguntasLocal !== null) {
        preguntas.forEach((pregunta: Pregunta) => {
          let existe = false;
          preguntasLocal.forEach((preguntaLocal: Pregunta) => {
            if (pregunta.id === preguntaLocal.id) {
              existe = true;
            }
          });
          if (!existe) {
            preguntasLocal.push(pregunta);
          }
        });
      } else {
        preguntasLocal = preguntas;
      }
      localStorage.setItem('preguntas', JSON.stringify(preguntasLocal));
    }
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
}
