import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class MqttserviceService {

  local_ip = "192.168.1.92"
  localhost = "localhost"

  constructor(private _http: HttpClient) { }

  getdata() {
    return this._http.get('http://' + this.local_ip + ':8000/homewizard_mqtt')
  }

  testMqttProtocol() {
    return this._http.get('http://' + this.local_ip + ':8000/test-mqtt-protocol')
  }

  controlarLeds() {
    return this._http.get('http://' + this.local_ip + ':8000/encender-led')
  }
}