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

  async getPreguntas(): Promise<Pregunta[]> {
    return this.http.get<any>(this._pregunta).toPromise();
  }

  updatePreguntaRespodida(prgnta:any) {
    delete prgnta.seleccion;
    console.log(prgnta);
    return this.http.put(this._pregunta, prgnta);
  }
}