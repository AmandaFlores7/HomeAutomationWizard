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
  preguntasCompletadas: boolean = false;

  preguntaActual: any;
  respuestaSeleccionada: string | undefined;
  puntaje: number = 0;
  preguntasAcertadas: any[] = [];
  preguntasFalladas: any[] = [];

  constructor(private route: ActivatedRoute, private pregunta_s: PreguntasServiceService) { }

  async ngOnInit(): Promise<void> {
    try {
      let doc = await this.pregunta_s.getPreguntas();
      this.preguntas = doc;
      let tipoPregunta;
      this.route.data.subscribe(data => {
        tipoPregunta = data['tipo'];
        console.log(tipoPregunta);
      });
      if (tipoPregunta) {
        this.obtenerPreguntas(tipoPregunta);
      }

      this.mostrarPrimeraPregunta();
    } catch (error) {
      console.log(error);
    }
  }

  cargarJson() {
    let doc = this.pregunta_s.getPreguntas();
    doc.then((data: any) => {
      this.preguntas = data;
      console.log(this.preguntas);
    });
  }

  volverIntentar() {
    this.preguntasCompletadas = false;
    this.preguntaActual = undefined;
    this.puntaje = 0;
    this.preguntasAcertadas = [];
    this.preguntasFalladas = [];
    this.listaPreguntas.forEach(pregunta => {
      pregunta.respondida = false;
      pregunta.seleccion = undefined;
    });
    this.desordenarPreguntas(this.listaPreguntas);
    this.desordenarAlternativas(this.listaPreguntas);
    this.mostrarPrimeraPregunta();
  }


  porcenajePreguntasRespondidas() {
    const preguntasRespondidas = this.listaPreguntas.filter(pregunta => pregunta.seleccion);
    if (this.listaPreguntas.length === 0) {
      return 100;
    }
    return Math.trunc((preguntasRespondidas.length / this.listaPreguntas.length) * 100);
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

  mostrarPrimeraPregunta() {
    this.preguntaActual = this.listaPreguntas[0];
  }

  cambiarPregunta(id: number) {
    this.listaPreguntas.forEach(pregunta => {
      if (pregunta.id === id) {
        this.preguntaActual = pregunta;
      }
    });
  }

  seleccionarRespuesta(str: string, id: number): void {
    let preguntasTerminadas = true;
    this.respuestaSeleccionada = str;
    this.listaPreguntas.forEach(pregunta => {
      if (pregunta.id === id) {
        pregunta.seleccion = str;
      }
      if (pregunta.seleccion === undefined) {
        preguntasTerminadas = false;
      }
    });
    if (preguntasTerminadas) {
      this.preguntasCompletadas = true;
    }
  }

  verificarRespuesta() {
    for (let i = 0; i < this.listaPreguntas.length; i++) {
      if (this.listaPreguntas[i].seleccion !== this.listaPreguntas[i].respuesta) {
        this.preguntasFalladas.push(this.listaPreguntas[i]);
      } else if (this.listaPreguntas[i].seleccion === this.listaPreguntas[i].respuesta) {
        this.preguntasAcertadas.push(this.listaPreguntas[i]);
        this.puntaje++;
      }
    }
    this.respuestaSeleccionada = undefined;
    this.preguntaActual = undefined;
    // if (this.respuestaSeleccionada !== undefined) {
    //   this.preguntaActual.respondida = true;
    //   if (this.respuestaSeleccionada === this.preguntaActual.respuesta) {
    //     this.puntaje++;
    //     this.preguntasAcertadas.push(this.preguntaActual);
    //   } else {
    //     this.preguntasFalladas.push(this.preguntaActual);
    //   }
    //   this.respuestaSeleccionada = undefined;
    //   this.mostrarSiguientePregunta();
    // }
    // console.log(this.puntaje);
    // console.log(this.preguntasAcertadas);
    // console.log(this.preguntasFalladas);
  }

  calcularPuntaje() {
    this.preguntaActual = undefined;
    // Aquí puedes hacer lo que quieras con el puntaje, por ejemplo, mostrar un mensaje en el componente
    console.log('Puntaje final:', this.puntaje);
    console.log('Preguntas acertadas:', this.preguntasAcertadas);
    console.log('Preguntas falladas:', this.preguntasFalladas);
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

  terminarQuiz() {
    // actualizar json con las preguntas respondidas correctamente
    this.preguntas.forEach(pregunta => {
      this.preguntasAcertadas.forEach(preguntaAcertada => {
        if (pregunta.id === preguntaAcertada.id) {
          this.pregunta_s.updatePreguntaRespodida(pregunta);
        }
      });
    });
  }
}

