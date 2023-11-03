import { Component } from '@angular/core';
import { Subscription, interval, switchMap } from 'rxjs';
import { Puerta } from 'src/app/models/puerta';
import { DataDevService } from 'src/app/servicios/data-dev.service';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { PuertasService } from 'src/app/servicios/puertas.service';

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

  constructor(private _mqttService: MqttserviceService, private _puertasService: PuertasService, private dataDev: DataDevService) {
    this.dataDev.devModeBool$.subscribe(value => {
      this.dataDevBol = value;
    })

  }

  ngOnInit(): void {
    this.puertasSuscripcion = this._puertasService.cargarPuertas().subscribe((data: Puerta[]) => {
      this.puertas = data
    })
  }

  ngOnDestroy() {
    if (this.puertasSuscripcion) {
      this.puertasSuscripcion.unsubscribe();
    }
  }

  crearPeticion() {
    console.log(this.puertas[0]);
    let peticion = "publicar en broker topico Door con mensaje {\"id\": " + this.puertaSeleccionada + ", \"estado\": \"" + this.accionSeleccionada + "\"}";
    if (this.accionSeleccionada && this.puertaSeleccionada) {
      this.textoPeticion = peticion;
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
    if (!puerta.abierta) {
      console.log("Cerrando puerta")
      this._mqttService.controlarPuerta(puerta.id, "CLOSE").subscribe(async res => {
        
      });
    } else {
      console.log("Abriendo puerta")
      this._mqttService.controlarPuerta(puerta.id, "OPEN").subscribe(async res => {
      
      });
    }

  }
}
