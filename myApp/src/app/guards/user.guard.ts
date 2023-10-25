import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({providedIn:"root"})
export class UserGuard implements CanActivate{
  constructor(private route: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('logado') === "false"){
      this.route.navigate(['login'])
      return false
    }
    return true
  }

}
