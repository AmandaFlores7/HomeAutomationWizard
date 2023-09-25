import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MqttserviceService {

  constructor(private _http:HttpClient) { }

  getdata(){
    return this._http.get('http://localhost:8000/homewizard_mqtt')
  }
}
