import { Component } from '@angular/core';
import { Luz } from 'src/app/models/luces.interfaces';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { LucesServiceService } from 'src/app/servicios/luces-service.service';

import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-probar-luz',
  templateUrl: './probar-luz.component.html',
  styleUrls: ['./probar-luz.component.scss']
})
export class ProbarLuzComponent {
  private lucesSubscription: Subscription = new Subscription;
  private estadoLedsSubscription: Subscription = new Subscription;
  
  switchState: boolean = false;
  luces: Luz[] = [];

  constructor(private _mqttService: MqttserviceService, private _lucesService: LucesServiceService) {

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

  alternarLuz(event: any, luz: Luz) {
    console.log("Alternando luz")
    console.log(luz)

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
