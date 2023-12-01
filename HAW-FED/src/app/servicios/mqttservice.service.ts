import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTES } from '../app.component';
@Injectable({
  providedIn: 'root'
})

export class MqttserviceService {

  apiUrl = CONSTANTES.api_url
  localhost = "localhost"

  constructor(private _http: HttpClient) { }

  getdata() {
    return this._http.get(this.apiUrl + '/homewizard_mqtt')
  }

  testMqttProtocol() {
    return this._http.get(this.apiUrl + '/test-mqtt-protocol')
  }

  controlarActuador(act_id: string, estado: any, tipo_act: string) {
    return this._http.get(this.apiUrl + '/controlar_actuador/set_status=' + estado + '&actuador_id=' + act_id + '&topico=' + tipo_act)
  }

  estadoActuadores(topico:string) {
    return this._http.get(this.apiUrl + '/estado-actuadores/topico=' + topico)
  }

  obtenerDatosSensor(tipoSensor: string) {
    return this._http.get(this.apiUrl + '/datos/tipo-sensor=' + tipoSensor);
  }
}