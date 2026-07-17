import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Auth } from '../services/auth';

export const roleGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);
  const token = auth.buscarToken();

  // verificação do token
  if (!auth.estaLogado()) {

    alert('Token expirado, faça login novamente.');
    router.navigate(['/login']);

    return false;
  }

  return auth.verificarUsuario(token).pipe( // pipe faz a mesma coisa que o subscribe
    map((response: any) => {

      const cargo = response.usuario.role;

      if (cargo === 'admin') {
        console.log(`Acesso permitido: usuário autenticado, cargo: ${cargo}`);

        return true;

      } else {
        console.log(`Acesso negado: usuário não autenticado, cargo: ${cargo}`);
        router.navigate(['/dashboard']);

        return false;
      }
    })
  );
};
