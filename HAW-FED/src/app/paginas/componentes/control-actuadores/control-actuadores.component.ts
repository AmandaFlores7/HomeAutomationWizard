import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval, retry, switchMap } from 'rxjs';
import { Actuador } from 'src/app/models/actuador';
import { DataDevService } from 'src/app/servicios/data-dev.service';
import { JsonService } from 'src/app/servicios/json.service';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';

@Component({
  selector: 'app-control-actuadores',
  templateUrl: './control-actuadores.component.html',
  styleUrls: ['./control-actuadores.component.scss']
})
export class ControlActuadoresComponent {
  dataDevBol: boolean = false;
  tipoActuador: any;
  actuadores: any[] = [];

  entradas: any[] = [];

  accionSeleccionada: string = ''; 
  textoPeticion: string = ''; 
  actuadorSeleccionado: string = '';

  opciones: any[] = [];

  private estadoActSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private json_s: JsonService, private mqtt_s: MqttserviceService, private dataDev: DataDevService) {
    this.dataDev.devModeBool$.subscribe(value => {
      this.dataDevBol = value;
    })
    this.route.data.subscribe(data => {
      this.tipoActuador = data['tipoActuador'];
      let tipo = data['nombre'];
      json_s.cargarActuadores(tipo).subscribe((data2: any[]) => {
        for (let i = 0; i < data2.length; i++) {
          let actuador = new this.tipoActuador.tipoActuador(data2[i].nombre, data2[i].id);
          this.actuadores.push(actuador);
        }
        this.entradas = Object.entries(this.actuadores[0].opciones);
        this.entradas.forEach(element => {
          this.opciones.push({ key: Object.keys(element[1]), value: Object.values(element[1]) });
        });
      })
    });
  }

  ngOnInit(): void {
    this.estadoActSubscription = interval(1000)
      .pipe(
        switchMap(() => this.obtenerEstadoActuadores())
      )
      .subscribe((data: any) => {
        for (let i = 0; i < this.actuadores.length; i++) {
          const estadoActual = data.estado_actuador[this.actuadores[i].id];
          for (const entrada of this.entradas) {
            let [booleano, opciones] = entrada;
            if (Object.keys(opciones as any).includes(estadoActual)) {
              this.actuadores[i].estado = JSON.parse(booleano);
            }
          }
        }
      });
  }

  ngOnDestroy() {
    if (this.estadoActSubscription) {
      this.estadoActSubscription.unsubscribe();
    }
  }

  obtenerEstadoActuadores() {
    return this.mqtt_s.estadoActuadores(this.tipoActuador.tipoActuador.name); // Realiza la solicitud al servicio MQTT
  }

  alternarActuador(event: any, actuador: any) {    
    const estadoActual = actuador.opciones[actuador.estado];
    const opcion = Object.keys(estadoActual)[0];
    this.mqtt_s.controlarActuador(actuador.id, opcion, this.tipoActuador.tipoActuador.name).subscribe(async res => {
    });
    this.bloquear(actuador.id);
  }

  crearPeticion() {
    let peticion = "publicar en 'broker' topico '"+this.tipoActuador.tipoActuador.name+"' con mensaje {\"id\": " + this.actuadorSeleccionado + ", \"estado\": \"" + this.accionSeleccionada + "\"}";
    if (this.actuadorSeleccionado && this.accionSeleccionada) {
      this.textoPeticion = peticion;
    }
    else {
      this.textoPeticion = "";
    }
  }

  enviarPeticion() {
    this.mqtt_s.controlarActuador(this.actuadorSeleccionado, this.accionSeleccionada, this.tipoActuador.tipoActuador.name).subscribe(async res => {
      console.log(res)
    });
  }

  bloquear(id:string) {
    let inputAct = window.document.getElementById(id) as HTMLInputElement;
    inputAct.disabled = true;
    setTimeout(() => {
      inputAct.disabled = false;
    }, 2000);
  }
}
