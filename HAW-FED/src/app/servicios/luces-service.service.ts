import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Luz } from 'src/app/models/luces.interfaces';
@Injectable({
  providedIn: 'root'
})
export class LucesServiceService {
  local_ip = "192.168.2.2"
  localhost = "localhost"

   constructor(private http: HttpClient) {}

  // Métodos para interactuar con la base de datos MongoDB
  // obtenerLuces() {
  //   return this.http.get<any[]>(`${this.local_ip}/luces`);
  // }
  
  cargarLuces(){
    return this.http.get<Luz[]>('/assets/luces.json');
  }
  
  actualizarLuz(id: string, luz: any) {
    return this.http.put<any>(`${this.local_ip}/luces/${id}`, luz);
  }

}
