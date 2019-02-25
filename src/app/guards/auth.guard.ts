import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  /**
   * Проверка на доступ к маршруту
   * @param route ActivatedRouteSnapshot
   * @param state RouterStateSnapshot
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuth()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
