import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  local_ip2 = '192.168.2.1';
  local_ip = '127.0.0.1';

  apiUrl = 'http://192.168.2.1:8000';

  constructor(private _http: HttpClient) {}

  verificarUsuario(usuario: any) {
    console.log('Verificando usuario:', usuario);
    return this._http.post(
      `${this.apiUrl}/usuarios/verificar-usuario`,
      usuario
    );
  }
}
