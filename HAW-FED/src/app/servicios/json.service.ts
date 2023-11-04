import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  navTituloJson = 'assets/titulo-botonones.json';
  public data: any;

  constructor(private http: HttpClient) {}

  obtenerJson(jsonPath: string = this.navTituloJson): Observable<any[]> {
    return this.http.get<any[]>(jsonPath);
  }

  cargarJson(jsonPath: string = this.navTituloJson, currentPath?: string) {
    if (currentPath == undefined) {
      currentPath = window.location.pathname; // Obtiene la ruta actual desde el router
    }
    return this.http.get<any[]>(this.navTituloJson).pipe(
      map((data) => {
        return data.find((item) => item.ruta === currentPath);
      })
    );
  }
}
