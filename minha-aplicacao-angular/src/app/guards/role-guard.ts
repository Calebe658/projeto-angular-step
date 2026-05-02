import {inject} from "@angular/core"
import {CanActivateFn, Router} from "@angular/router"

export const roleGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!isAdmin) {
    router.navigate(['/produtos']);
    return false;
  }
  
  return true;
};