import { Injectable } from '@angular/core';
import pregunta  from 'src/app/constantes/preguntas'; // Asegúrate de importar el modelo de pregunta
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasServiceService {

  getPreguntas():Pregunta[] {
    return pregunta;
  }
}