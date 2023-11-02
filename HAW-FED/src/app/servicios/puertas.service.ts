import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Puerta } from '../models/puerta';

@Injectable({
  providedIn: 'root'
})
export class PuertasService {
  local_ip = "192.168.2.1"
  localhost = "localhost"

   constructor(private http: HttpClient) {}
  
  cargarPuertas(){
    return this.http.get<Puerta[]>('/assets/puertas.json');
  }
}
