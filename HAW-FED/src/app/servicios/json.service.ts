import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Luz } from '../models/luces.interfaces';
import { Puertas } from '../models/puerta';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) { }

  obtenerDatosMenu(urlActual: string): Observable<any[]> {
    return this.http.get<any[]>('assets/menus.json').pipe(
      map((data: any[]) => {
        const dataF = data.find((item: any) => item.ruta === urlActual);
        return dataF ? dataF : [];
      })
    );
  }
  
  obtenerContenidoWiki(urlActual: string): Observable<any[]> {
    return this.http.get<any[]>('assets/wiki-iot.json').pipe(
      map((data: any[]) => {       
        const dataF = data.find((item: any) => item.ruta === urlActual)
        return dataF ? dataF : [];
      })
    )
  }

  obtenerContenidoWiki2(urlActual: string): Observable<any[]> {
    return this.http.get<any[]>('assets/wiki.json').pipe(
      map((data: any[]) => {       
        const dataF = data.find((item: any) => item.ruta === urlActual)
        return dataF ? dataF : [];
      })
    )
  }

  cargarActuadores(tipoActuador: any) {
    let url = '/assets/' + tipoActuador + '.json';
    console.log("url: ", url);
    console.log("ass: ", tipoActuador);
    return this.http.get<any[]>(url);
  }

  cargarLuces() {
    return this.http.get<Luz[]>('/assets/Luces.json');
  }

  cargarPuertas() {
    return this.http.get<Puertas[]>('/assets/Puerta.json');
  }
}
