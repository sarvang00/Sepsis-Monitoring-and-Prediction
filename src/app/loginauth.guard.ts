import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from './authgaurdservice.service'
@Injectable({
  providedIn: 'root'
})
export class LOGINAUTHGuard implements CanActivate {
  constructor(private Authguardservice: AuthgaurdserviceService, 
    private route: ActivatedRoute,
    private router: Router) {}  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if(localStorage.getItem('isLoggedIn') == "true"){
        this.router.navigate(['/home']); 
        return false;
      }
     
    return true;
  }
  
}
