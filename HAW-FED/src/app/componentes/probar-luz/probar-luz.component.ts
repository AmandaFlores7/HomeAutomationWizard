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
  switchState:boolean = false;
  luces: Luz[] = [];
  
  constructor(private _mqttService: MqttserviceService, private _lucesService: LucesServiceService){

  }

  ngOnInit():void{
    this._lucesService.cargarLuces().subscribe( (data:Luz[]) =>{
      this.luces = data
    })
  }

  alternarLuz(event: any, luz: Luz){
    
    if(this.switchState){
      this.switchState = false;
      this._mqttService.controlarLeds().subscribe(async res => {
        setTimeout(() => {
          
        }, 1500);
      });
      
    }else{
      this.switchState = true;
      this._mqttService.controlarLeds().subscribe(async res => {
        setTimeout(() => {
          
        }, 1500);
      });
    }
    
    
  }
}
