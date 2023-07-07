import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

export const navigationGuard: CanActivateFn = (route, state) => {
  const navigation = inject(NavigationService)
  return navigation.selectedProduct$.pipe(map( p => p !== null));
};

@Injectable({
  providedIn:'root'
})
export class NavigationGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const navigation = inject(NavigationService)
    return navigation.selectedProduct$.pipe(map( p => p !== null));
  }
}
