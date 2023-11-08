import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTES } from '../app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = CONSTANTES.api_url;

  constructor(private _http: HttpClient) {}

  verificarUsuario(usuario: any) {
    console.log('Verificando usuario:', usuario);
    return this._http.post(
      `${this.apiUrl}/usuarios/verificar-usuario`,
      usuario
    );
  }
}
