import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginuserService} from "../login/loginuser.service";
import {UserRole} from "../login/UserRole";

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private loginUserService: LoginuserService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginUserService.userLogin.length!==0 && this.loginUserService.userRole===UserRole.ADMIN){
      return true;
    }
    else {
      this.router.navigate(["/unauthorized-page" ])
    return false;
    }

  }



}
