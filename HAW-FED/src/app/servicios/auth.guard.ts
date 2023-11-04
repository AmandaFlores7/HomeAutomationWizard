import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const usuarioLocal: { rut: string } | null = JSON.parse(localStorage.getItem('usuario') || 'null');
    if (!usuarioLocal) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}