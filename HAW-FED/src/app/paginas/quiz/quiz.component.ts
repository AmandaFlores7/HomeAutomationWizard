import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntasServiceService } from 'src/app/servicios/preguntas-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  listaPreguntas: any[] = [];
  listaPreguntasDinamica: any[] = [];
  preguntas: any[] = [];
  preguntasCompletadas: boolean = false;
  totalPreguntas = 0;

  preguntaActual: any;
  respuestaSeleccionada: string | undefined;
  puntaje: number = 0;
  preguntasAcertadas: any[] = [];
  preguntasFalladas: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pregunta_s: PreguntasServiceService,
    private router: Router
  ) {}

  cambiarPregunta(id: number) {
    this.listaPreguntas.forEach((pregunta) => {
      if (pregunta.id === id) {
        this.preguntaActual = pregunta;
      }
    });
    this.cambiarListaDinamica(this.obtenerIndex(this.preguntaActual));
  }

  cambiarListaDinamica(index: number) {
    if (this.totalPreguntas <= 6) {
      this.listaPreguntasDinamica = this.listaPreguntas;
    } else if (this.totalPreguntas > 6) {
      if (index <= 3) {
        this.listaPreguntasDinamica = this.listaPreguntas.slice(0, 4);
        this.listaPreguntasDinamica.push('...');
        this.listaPreguntasDinamica.push(
          this.listaPreguntas[this.totalPreguntas - 1]
        );
      } else if (index > 3 && index < this.totalPreguntas - 2) {
        this.listaPreguntasDinamica = this.listaPreguntas.slice(
          index - 2,
          index + 1
        );
        this.listaPreguntasDinamica.unshift('...');
        this.listaPreguntasDinamica.unshift(this.listaPreguntas[0]);
        this.listaPreguntasDinamica.push('...');
        this.listaPreguntasDinamica.push(
          this.listaPreguntas[this.totalPreguntas - 1]
        );
      } else if (index >= this.totalPreguntas - 2) {
        this.listaPreguntasDinamica = this.listaPreguntas.slice(
          this.totalPreguntas - 4,
          this.totalPreguntas
        );
        this.listaPreguntasDinamica.unshift('...');
        this.listaPreguntasDinamica.unshift(this.listaPreguntas[0]);
      }
    }
  }

  async ngOnInit(): Promise<void> {
    try {
      let doc = await this.pregunta_s.obtenerPreguntas();
      this.preguntas = doc;
      let tipoPregunta;
      this.route.data.subscribe((data) => {
        tipoPregunta = data['tipo'];
      });
      if (tipoPregunta) {
        this.obtenerPreguntas(tipoPregunta);
      }

      this.mostrarPrimeraPregunta();
      this.cambiarListaDinamica(0);
    } catch (error) {
      console.log(error);
    }
  }

  volverIntentar() {
    this.preguntasCompletadas = false;
    this.preguntaActual = undefined;
    this.puntaje = 0;
    this.preguntasAcertadas = [];
    this.preguntasFalladas = [];
    this.listaPreguntas.forEach((pregunta) => {
      pregunta.respondida = false;
      pregunta.seleccion = undefined;
    });
    this.desordenarPreguntas(this.listaPreguntas);
    this.desordenarAlternativas(this.listaPreguntas);
    this.mostrarPrimeraPregunta();
  }

  porcenajePreguntasRespondidas() {
    const preguntasRespondidas = this.listaPreguntas.filter(
      (pregunta) => pregunta.seleccion
    );
    if (this.listaPreguntas.length === 0) {
      return 100;
    }
    return Math.trunc(
      (preguntasRespondidas.length / this.listaPreguntas.length) * 100
    );
  }

  haySeleccion(id: number) {
    let seleccion = true;
    this.listaPreguntas.forEach((pregunta) => {
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
    this.cambiarListaDinamica(1);
  }

  seleccionarRespuesta(str: string, id: number): void {
    let preguntasTerminadas = true;
    this.respuestaSeleccionada = str;
    this.listaPreguntas.forEach((pregunta) => {
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
      if (
        this.listaPreguntas[i].seleccion !== this.listaPreguntas[i].respuesta
      ) {
        this.preguntasFalladas.push(this.listaPreguntas[i]);
      } else if (
        this.listaPreguntas[i].seleccion === this.listaPreguntas[i].respuesta
      ) {
        this.preguntasAcertadas.push(this.listaPreguntas[i]);
        this.puntaje++;
      }
    }
    this.respuestaSeleccionada = undefined;
    this.preguntaActual = undefined;
  }

  calcularPuntaje() {
    this.preguntaActual = undefined;
  }

  obtenerPreguntas(tipoPregunta: string) {
    if (this.preguntas) {
      // filtrar por tipo de pregunta
      let setPreguntas = this.preguntas.filter(
        (pregunta: { tipo: string }) => pregunta.tipo === tipoPregunta
      );
      // filtrar si pregunta fue no respondida, si la cantidad es menor de 3, rellenar con preguntas respondidas
      setPreguntas = setPreguntas.filter(
        (pregunta: { respondida: boolean }) => pregunta.respondida === false
      );
      if (setPreguntas.length < 3) {
        // completar el set de 3 preguntas con preguntas respondidas
        let preguntasRespondidas = this.preguntas.filter(
          (pregunta: { tipo: string }) => pregunta.tipo === tipoPregunta
        );
        preguntasRespondidas = preguntasRespondidas.filter(
          (pregunta: { respondida: boolean }) => pregunta.respondida === true
        );
        preguntasRespondidas = preguntasRespondidas.slice(
          0,
          3 - setPreguntas.length
        );
        // setear a falso las preguntas respondidas
        preguntasRespondidas.forEach((pregunta) => {
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
      this.totalPreguntas = this.listaPreguntas.length;
    }
  }

  obtenerIndex(pregunta: any) {
    return (
      this.listaPreguntas.findIndex(
        (preguntaLista: { id: number }) => preguntaLista.id === pregunta.id
      ) + 1
    );
  }

  desordenarPreguntas(preguntas: any[]) {
    let indiceActual = preguntas.length,
      indiceAleatorio;
    while (0 !== indiceActual) {
      indiceAleatorio = Math.floor(Math.random() * indiceActual);
      indiceActual--;
      [preguntas[indiceActual], preguntas[indiceAleatorio]] = [
        preguntas[indiceAleatorio],
        preguntas[indiceActual],
      ];
    }
    return preguntas;
  }

  desordenarAlternativas(preguntas: any[]) {
    preguntas.forEach((pregunta) => {
      let indiceActual = pregunta.alternativas.length,
        indiceAleatorio;
      while (0 !== indiceActual) {
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual--;
        [
          pregunta.alternativas[indiceActual],
          pregunta.alternativas[indiceAleatorio],
        ] = [
          pregunta.alternativas[indiceAleatorio],
          pregunta.alternativas[indiceActual],
        ];
      }
    });
    return preguntas;
  }

  terminarQuiz() {
    // actualizar json con las preguntas respondidas correctamente
    this.preguntas.forEach((pregunta) => {
      this.preguntasAcertadas.forEach((preguntaAcertada) => {
        if (pregunta.id === preguntaAcertada.id) {
          this.pregunta_s.actualizarPregunta('respondida', pregunta.id);
        }
      });
    });
    this.regresarPaginaAnterior();
  }

  regresarPaginaAnterior() {
    const rutaActual = this.router.url;
    const partesRuta = rutaActual.split('/');
    partesRuta.pop();
    const nuevaRuta = partesRuta.join('/');
    this.router.navigate([nuevaRuta]);
  }
}
