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

  controlarLeds(luz_id: any, estado: any) {
    return this._http.get(this.apiUrl + '/controlar_leds/set_status=' + estado + '&led_id=' + luz_id)
  }

  controlarPuerta(puerta_id: string, estado: any) {
    return this._http.get(this.apiUrl + '/controlar_puerta/set_status=' + estado + '&puerta_id=' + puerta_id)
  }

  estdosLeds() {
    return this._http.get(this.apiUrl + '/estado-leds')
  }

  obtenerDatosSensor(tipoSensor: string) {
    return this._http.get(this.apiUrl + '/datos/tipo-sensor=' + tipoSensor);
  }
}