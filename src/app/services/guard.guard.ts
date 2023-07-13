import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthFireService } from './auth.fire.service';

export const guardGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot) => {
    const auth = inject(AuthFireService);
    return auth.isLoggedIn();
};
