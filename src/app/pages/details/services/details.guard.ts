import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (router.queryParams.lat && router.queryParams.lon) {
      return true;
    }

    return this.router.createUrlTree(['']);
  }

}
