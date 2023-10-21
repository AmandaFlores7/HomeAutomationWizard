import { Component } from '@angular/core';
import { Luz } from 'src/app/models/luces.interfaces';
import { MqttserviceService } from 'src/app/servicios/mqttservice.service';
import { LucesServiceService } from 'src/app/servicios/luces-service.service';
@Component({
  selector: 'app-probar-luz',
  templateUrl: './probar-luz.component.html',
  styleUrls: ['./probar-luz.component.scss']
})
export class ProbarLuzComponent {
  switchState: boolean = false;
  luces: Luz[] = [];

  constructor(private _mqttService: MqttserviceService, private _lucesService: LucesServiceService) {

  }

  ngOnInit(): void {
    this._lucesService.cargarLuces().subscribe((data: Luz[]) => {
      this.luces = data
    })
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
