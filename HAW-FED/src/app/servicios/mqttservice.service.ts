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

  controlarActuador(act_id: string, estado: any, tipo_act: string) {
    if (tipo_act === 'Ledh') {
      return this._http.get(this.apiUrl + '/controlar_leds/set_status=' + estado + '&led_id=' + act_id)
    }
    else if (tipo_act === 'Puerta') {
      return this._http.get(this.apiUrl + '/controlar_puerta/set_status=' + estado + '&puerta_id=' + act_id)
    }
    else {
      return this._http.get(this.apiUrl + '/controlar_actuador/set_status=' + estado + '&actuador_id=' + act_id + '&topico=' + tipo_act)
    }
  }

  estdosLeds(topico:string) {
    return this._http.get(this.apiUrl + '/estado-leds')
  }

  estadoActuadores(topico:string) {
    return this._http.get(this.apiUrl + '/estado-actuadores/topico=' + topico)
  }

  obtenerDatosSensor(tipoSensor: string) {
    return this._http.get(this.apiUrl + '/datos/tipo-sensor=' + tipoSensor);
  }
}