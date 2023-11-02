import { Component } from '@angular/core';
import { Subscription, interval, switchMap } from 'rxjs';
import { Puerta } from 'src/app/models/puerta';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { PuertasService } from 'src/app/servicios/puertas.service';

@Component({
  selector: 'app-control-puerta',
  templateUrl: './control-puerta.component.html',
  styleUrls: ['./control-puerta.component.scss']
})
export class ControlPuertaComponent {
  private puertasSuscripcion: Subscription = new Subscription;
  private estadoPuertasSubscription: Subscription = new Subscription;
  
  switchState: boolean = false;
  puertas: Puerta[] = [];

  constructor(private _mqttService: MqttserviceService, private _puertasService: PuertasService) {

  }

  ngOnInit(): void {
    this.puertasSuscripcion = this._puertasService.cargarPuertas().subscribe((data: Puerta[]) => {
      this.puertas = data
    })

    // // Realiza la solicitud cada 5 segundos (5000 milisegundos)
    // this.estadoPuertasSubscription = interval(1000)
    //   .pipe(
    //     switchMap(() => this.obtenerEstadoLeds()) // Cambia a la nueva solicitud después del intervalo
    //   )
    //   .subscribe((data: any) => {
    //     for (let i = 0; i < this.puertas.length; i++) {
    //       if (data.leds_status[this.puertas[i].id] === 'ON') {
    //         this.puertas[i].abierta = true;
    //       } else {
    //         this.puertas[i].abierta = false;
    //       }
    //     }
    //   });
  }

  ngOnDestroy() {
    // Desuscribirse de todas las suscripciones para evitar pérdidas de memoria
    if (this.puertasSuscripcion) {
      this.puertasSuscripcion.unsubscribe();
    }
    // if (this.estadoPuertasSubscription) {
    //   this.estadoPuertasSubscription.unsubscribe();
    // }
  }

  obtenerEstadoLeds() {
    return this._mqttService.estdosLeds(); // Realiza la solicitud al servicio MQTT
  }

  controlarPuerta(event: any, puerta: Puerta) {
    console.log("Manejo Puerta")
    console.log(puerta)

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
