import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '../services/auth';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private auth: Auth,
    private router: Router,
  ) { }

  canActivate(): boolean {
    if (this.auth.buscarToken()) {
      console.log('Acesso permitido: usuário autenticado');
      return true;
    }
    
    console.log('Acesso negado: usuário não autenticado');
    this.router.navigate(['/login']);
    return false;
  } 
}