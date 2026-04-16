import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Auth } from '../services/auth';

export const perfilAcessoGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);
  const token = localStorage.getItem('token');

  return authService.verificarUsuario(token).pipe( // pipe faz a mesma coisa que o subscribe
    map((response: any) => {
      const cargo = response.cargo;
      console.log(cargo);

      if (cargo === 'admin') {
        return true;

      } else {
        router.navigate(['/dashboard']);
        return false;
      }
    })
  );
};