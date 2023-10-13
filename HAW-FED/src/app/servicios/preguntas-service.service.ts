import { Injectable } from '@angular/core';
import pregunta  from 'src/app/constantes/preguntas'; // Asegúrate de importar el modelo de pregunta
import { Pregunta } from '../models/pregunta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasServiceService {

  private _pregunta = 'assets/preguntas.json';

  constructor(private http: HttpClient) { }

  cargarPreguntas(): void {
    let preguntas = this.http.get<any>(this._pregunta).toPromise();
    preguntas.then((data) => {
      localStorage.setItem('preguntas', JSON.stringify(data));
    });
  }

  obtenerPreguntas(): any {
    return JSON.parse(localStorage.getItem('preguntas') || 'null');
  }

  actualizarPregunta(tipo: string, id: number): void {
    if (tipo === 'respondida') {
      let preguntas = JSON.parse(localStorage.getItem('preguntas') || 'null');
      preguntas.forEach((pregunta: Pregunta) => {
        if (pregunta.id === id) {
          pregunta.respondida = true;
        }
      });
      localStorage.setItem('preguntas', JSON.stringify(preguntas));
    }
  }
}