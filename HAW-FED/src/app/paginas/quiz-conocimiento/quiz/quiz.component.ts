import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import preguntas from 'src/app/constantes/preguntas';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  preguntas: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let tipoPregunta;
    this.route.data.subscribe(data => {
      tipoPregunta = data['tipo'];
      console.log(tipoPregunta);
    });
    if (tipoPregunta) {
      this.obtenerPreguntas(tipoPregunta);
    }
  }

  obtenerPreguntas(tipoPregunta: string) {
    if (preguntas) {
      // filtrar por tipo de pregunta
      let setPreguntas = preguntas.filter((pregunta: { tipo: string; }) => pregunta.tipo === tipoPregunta);
      // filtrar si pregunta fue no respondida, si la cantidad es menor de 3, rellenar con preguntas respondidas
      setPreguntas = setPreguntas.filter((pregunta: { respondida: boolean; }) => pregunta.respondida === false);
      if (setPreguntas.length < 3) {
        // completar el set de 3 preguntas con preguntas respondidas
        let preguntasRespondidas = preguntas.filter((pregunta: { tipo: string; }) => pregunta.tipo === tipoPregunta);
        preguntasRespondidas = preguntasRespondidas.filter((pregunta: { respondida: boolean; }) => pregunta.respondida === true);
        preguntasRespondidas = preguntasRespondidas.slice(0, 3 - setPreguntas.length);
        setPreguntas = setPreguntas.concat(preguntasRespondidas);
      }
      // desordenar preguntas
      setPreguntas = this.desordenarPreguntas(setPreguntas);
      // desordenar alternativas
      setPreguntas = this.desordenarAlternativas(setPreguntas);
      // asignar preguntas
      this.preguntas = setPreguntas;
    }
  }

  desordenarPreguntas(preguntas: any[]) {
    let indiceActual = preguntas.length, indiceAleatorio;
    while (0 !== indiceActual) {
      indiceAleatorio = Math.floor(Math.random() * indiceActual);
      indiceActual--;
      [preguntas[indiceActual], preguntas[indiceAleatorio]] = [
        preguntas[indiceAleatorio], preguntas[indiceActual]];
    }
    return preguntas;
  }

  desordenarAlternativas(preguntas: any[]) {
    preguntas.forEach(pregunta => {
      let indiceActual = pregunta.alternativas.length, indiceAleatorio;
      while (0 !== indiceActual) {
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual--;
        [pregunta.alternativas[indiceActual], pregunta.alternativas[indiceAleatorio]] = [
          pregunta.alternativas[indiceAleatorio], pregunta.alternativas[indiceActual]];
      }
    });
    return preguntas;
  }
}
