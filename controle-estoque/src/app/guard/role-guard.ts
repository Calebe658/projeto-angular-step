// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Auth } from '../services/auth';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const roleNecessaria = route.data['role'];

    if (this.auth.estaLogado() && this.auth.temRole(roleNecessaria)) {
      return true;
    }

    this.router.navigate(['/dashboard']);
    return false;
  }
}
