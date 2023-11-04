import { Component } from '@angular/core';
import { Luz } from 'src/app/models/luces.interfaces';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { LucesServiceService } from 'src/app/servicios/luces-service.service';

import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataDevService } from 'src/app/servicios/data-dev.service';

@Component({
  selector: 'app-probar-luz',
  templateUrl: './probar-luz.component.html',
  styleUrls: ['./probar-luz.component.scss']
})
export class ProbarLuzComponent {
  private lucesSubscription: Subscription = new Subscription;
  private estadoLedsSubscription: Subscription = new Subscription;

  luzSeleccionada: string = ''; // Variable para la primera selección
  accionSeleccionada: string = ''; // Variable para la segunda selección
  textoPeticion: string = ''; // Variable para mostrar el texto de la petición

  switchState: boolean = false;
  luces: Luz[] = [];

  dataDevBol = false;

  constructor(private _mqttService: MqttserviceService, private _lucesService: LucesServiceService, private dataDev: DataDevService) {
    this.dataDev.devModeBool$.subscribe(value => {
      this.dataDevBol = value;
    })
  }

  ngOnInit(): void {
    this.lucesSubscription = this._lucesService.cargarLuces().subscribe((data: Luz[]) => {
      this.luces = data
    })

    // Realiza la solicitud cada 5 segundos (5000 milisegundos)
    this.estadoLedsSubscription = interval(1000)
      .pipe(
        switchMap(() => this.obtenerEstadoLeds()) // Cambia a la nueva solicitud después del intervalo
      )
      .subscribe((data: any) => {
        for (let i = 0; i < this.luces.length; i++) {
          if (data.leds_status[this.luces[i].id] === 'ON') {
            this.luces[i].activada = true;
          } else {
            this.luces[i].activada = false;
          }
        }
      });
  }

  crearPeticion() {
    let peticion = "publicar en 'broker' topico 'Leds' con mensaje {\"id\": " + this.luzSeleccionada + ", \"estado\": \"" + this.accionSeleccionada + "\"}";
    if (this.luzSeleccionada && this.accionSeleccionada) {
      this.textoPeticion = peticion;
    }
    else {
      this.textoPeticion = "";
    }
  }

  ngOnDestroy() {
    // Desuscribirse de todas las suscripciones para evitar pérdidas de memoria
    if (this.lucesSubscription) {
      this.lucesSubscription.unsubscribe();
    }
    if (this.estadoLedsSubscription) {
      this.estadoLedsSubscription.unsubscribe();
    }
  }

  obtenerEstadoLeds() {
    return this._mqttService.estdosLeds(); // Realiza la solicitud al servicio MQTT
  }

  enviarPeticion() {
    this._mqttService.controlarLeds(this.luzSeleccionada, this.accionSeleccionada).subscribe(async res => {
      console.log(res)
    });
  }

  alternarLuz(event: any, luz: Luz) {
    if (!luz.activada) {
      console.log("Apagando luz")
      this._mqttService.controlarLeds(luz.id, "OFF").subscribe(async res => {

      });
    } else {
      console.log("Encendiendo luz")
      this._mqttService.controlarLeds(luz.id, "ON").subscribe(async res => {

      });
    }
  }
}
