import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntasServiceService } from 'src/app/servicios/preguntas-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  listaPreguntas: any[] = [];
  preguntas: any[] = [];

  preguntaActual: any;
  respuestaSeleccionada: string | undefined;
  puntaje: number = 0;
  preguntasAcertadas: any[] = [];
  preguntasFalladas: any[] = [];

  constructor(private route: ActivatedRoute, private pregunta_s: PreguntasServiceService) { }

  ngOnInit(): void {
    this.cargarJson();
    let tipoPregunta;
    this.route.data.subscribe(data => {
      tipoPregunta = data['tipo'];
      console.log(tipoPregunta);
    });
    if (tipoPregunta) {
      this.obtenerPreguntas(tipoPregunta);
    }

    this.mostrarSiguientePregunta();
  }

  cargarJson() {
    let doc = this.pregunta_s.getPreguntas();
    // crear una copia
    this.preguntas = JSON.parse(JSON.stringify(doc));
  }


  porcenajePreguntasRespondidas() {
    const preguntasRespondidas = this.listaPreguntas.filter(pregunta => pregunta.respondida);
    return (preguntasRespondidas.length / this.listaPreguntas.length) * 100;
  }

  haySeleccion(id: number) {
    let seleccion = true;
    this.listaPreguntas.forEach(pregunta => {
      if (pregunta.id === id) {
        if (pregunta.seleccion) {
          seleccion = false;
        }
      }
    });
    return seleccion;
  }

  mostrarSiguientePregunta() {
    const preguntasNoRespondidas = this.listaPreguntas.filter(pregunta => !pregunta.seleccion);
    if (preguntasNoRespondidas.length > 0) {
      const indicePregunta = Math.floor(Math.random() * preguntasNoRespondidas.length);
      this.preguntaActual = preguntasNoRespondidas[indicePregunta];
    } else {
      // Todas las preguntas han sido respondidas
      this.calcularPuntaje();
    }
  }

  seleccionarRespuesta(str: string, id: number): void {
    this.respuestaSeleccionada = str;
    this.listaPreguntas.forEach(pregunta => {
      if (pregunta.id === id) {
        pregunta.seleccion = str;
      }
    });
  }

  verificarRespuesta() {
    if (this.respuestaSeleccionada !== undefined) {
      this.preguntaActual.respondida = true;
      if (this.respuestaSeleccionada === this.preguntaActual.respuesta) {
        this.puntaje++;
        this.preguntasAcertadas.push(this.preguntaActual);
      } else {
        this.preguntasFalladas.push(this.preguntaActual);
      }
      this.respuestaSeleccionada = undefined;
      this.mostrarSiguientePregunta();
    }
  }

  calcularPuntaje() {
    // Aquí puedes hacer lo que quieras con el puntaje, por ejemplo, mostrar un mensaje en el componente
    console.log('Puntaje final:', this.puntaje);
    console.log('Preguntas acertadas:', this.preguntasAcertadas);
    console.log('Preguntas falladas:', this.preguntasFalladas);
    this.preguntaActual = undefined;
    this.listaPreguntas = [];
  }

  obtenerPreguntas(tipoPregunta: string) {
    if (this.preguntas) {
      // filtrar por tipo de pregunta
      let setPreguntas = this.preguntas.filter((pregunta: { tipo: string; }) => pregunta.tipo === tipoPregunta);
      // filtrar si pregunta fue no respondida, si la cantidad es menor de 3, rellenar con preguntas respondidas
      setPreguntas = setPreguntas.filter((pregunta: { respondida: boolean; }) => pregunta.respondida === false);
      if (setPreguntas.length < 3) {
        // completar el set de 3 preguntas con preguntas respondidas
        let preguntasRespondidas = this.preguntas.filter((pregunta: { tipo: string; }) => pregunta.tipo === tipoPregunta);
        preguntasRespondidas = preguntasRespondidas.filter((pregunta: { respondida: boolean; }) => pregunta.respondida === true);
        preguntasRespondidas = preguntasRespondidas.slice(0, 3 - setPreguntas.length);
        // setear a falso las preguntas respondidas
        preguntasRespondidas.forEach(pregunta => {
          pregunta.respondida = false;
        });
        setPreguntas = setPreguntas.concat(preguntasRespondidas);
      }
      // desordenar preguntas
      setPreguntas = this.desordenarPreguntas(setPreguntas);
      // desordenar alternativas
      setPreguntas = this.desordenarAlternativas(setPreguntas);
      // asignar preguntas
      this.listaPreguntas = setPreguntas;
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
