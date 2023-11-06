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

  controlarLeds(luz_id: any, estado: any) {
    return this._http.get('http://' + this.local_ip + ':8000/controlar_leds/set_status=' + estado + '&led_id=' + luz_id)
  }

  controlarPuerta(puerta_id: string, estado: any) {
    return this._http.get('http://' + this.local_ip + ':8000/controlar_puerta/set_status=' + estado + '&puerta_id=' + puerta_id)
  }

  estdosLeds() {
    return this._http.get('http://' + this.local_ip + ':8000/estado-leds')
  }

  obtenerDatosSensor(tipoSensor: string) {
    return this._http.get('http://' + this.local_ip + ':8000/datos/tipo-sensor=' + tipoSensor);
  }



  enviarMensaje(mensaje: string, topico: string, nombre: string) {
    let data = {
      mensaje: mensaje,
      topico: topico,
      nombre: nombre
    }
    console.log(data);
    return this._http.post('http://' + this.local_ip + ':8000/mensajeria/agregar', data);
  }
}