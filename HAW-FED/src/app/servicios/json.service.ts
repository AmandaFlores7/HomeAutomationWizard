import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  constructor(private http: HttpClient) {}

  obtenerDatosMenu(urlActual: string): Observable<any[]> {
    return this.http.get<any[]>('assets/menus.json').pipe(
      map((data: any[]) => {
        const dataF = data.find((item: any) => item.ruta === urlActual);
        return dataF ? dataF.items : [];
      })
    );
  }
}
