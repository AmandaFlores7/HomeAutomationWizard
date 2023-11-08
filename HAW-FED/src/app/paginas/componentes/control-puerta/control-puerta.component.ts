import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Puerta } from 'src/app/models/puerta';
import { DataDevService } from 'src/app/servicios/data-dev.service';
import { JsonService } from 'src/app/servicios/json.service';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';

@Component({
  selector: 'app-control-puerta',
  templateUrl: './control-puerta.component.html',
  styleUrls: ['./control-puerta.component.scss']
})
export class ControlPuertaComponent {
  private puertasSuscripcion: Subscription = new Subscription;

  switchState: boolean = false;
  puertas: Puerta[] = [];

  puertaSeleccionada: string = ''; // Variable para la primera selección
  accionSeleccionada: string = ''; // Variable para la segunda selección
  textoPeticion: string = ''; // Variable para mostrar el texto de la petición

  dataDevBol = false;

  constructor(private _mqttService: MqttserviceService, private jsonService: JsonService, private dataDev: DataDevService) {
    this.dataDev.devModeBool$.subscribe(value => {
      this.dataDevBol = value;
    })

  }

  ngOnInit(): void {
    this.puertasSuscripcion = this.jsonService.cargarPuertas().subscribe((data: Puerta[]) => {
      this.puertas = data
    })
  }

  ngOnDestroy() {
    if (this.puertasSuscripcion) {
      this.puertasSuscripcion.unsubscribe();
    }
  }

  crearPeticion() {
    if (this.accionSeleccionada && this.puertaSeleccionada) {
      this.textoPeticion = "publicar en broker topico Door con mensaje {\"id\": " + this.puertaSeleccionada + ", \"estado\": \"" + this.accionSeleccionada + "\"}";
    }
    else {
      this.textoPeticion = "";
    }
  }

  enviarPeticion() {
    if (this.puertaSeleccionada && this.accionSeleccionada) {
      this._mqttService.controlarPuerta(this.puertaSeleccionada, this.accionSeleccionada).subscribe(async res => {

      });
    }
  }

  obtenerEstadoLeds() {
    return this._mqttService.estdosLeds(); // Realiza la solicitud al servicio MQTT
  }

  controlarPuerta(event: any, puerta: Puerta) {
    const accion = puerta.abierta ? 'CLOSE' : 'OPEN';

    this._mqttService.controlarPuerta(puerta.id, accion).subscribe(async res => { });
  }
}
