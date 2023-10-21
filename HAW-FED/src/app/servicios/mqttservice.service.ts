import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class MqttserviceService {

  local_ip = "192.168.2.1"
  localhost = "localhost"

  constructor(private _http: HttpClient) { }

  getdata() {
    return this._http.get('http://' + this.local_ip + ':8000/homewizard_mqtt')
  }

  testMqttProtocol() {
    return this._http.get('http://' + this.local_ip + ':8000/test-mqtt-protocol')
  }

  controlarLeds(luz_id:any,estado:any) {
    return this._http.get('http://' + this.local_ip + ':8000/controlar_leds/set_status='+estado+'&led_id='+luz_id)
  }
}