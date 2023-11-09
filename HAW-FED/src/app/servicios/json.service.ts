import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Luz } from '../models/luces.interfaces';
import { Puerta } from '../models/puerta';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  obtenerDatosMenu(urlActual: string): Observable<any[]> {
    return this.http.get<any[]>('assets/menus.json').pipe(
      map((data: any[]) => {
        const dataF = data.find((item: any) => item.ruta === urlActual);
        return dataF ? dataF : [];
      })
    );
  }

  cargarLuces() {
    return this.http.get<Luz[]>('/assets/luces.json');
  }

  cargarPuertas() {
    return this.http.get<Puerta[]>('/assets/puertas.json');
  }
}
