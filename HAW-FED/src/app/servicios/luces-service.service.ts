import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Luz } from 'src/app/models/luces.interfaces';
@Injectable({
  providedIn: 'root',
})
export class LucesServiceService {
  local_ip = "192.168.2.1"
  localhost = "localhost"

  constructor(private http: HttpClient) {}

  cargarLuces() {
    return this.http.get<Luz[]>('/assets/luces.json');
  }
}
