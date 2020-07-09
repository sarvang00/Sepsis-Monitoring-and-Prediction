import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from './authgaurdservice.service'

@Injectable({
  providedIn: 'root'
})
export class HomeguardGuard implements CanActivate {
  
  constructor(
    private authService: AuthgaurdserviceService,
    private route: ActivatedRoute,
    private router: Router, ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn()) {   
        
        return true;      
        } 
             
        // navigate to login page as user is not authenticated      
     this.router.navigate(['/login']);      
     return false;      
  }
  public isLoggedIn(): boolean {      
    let status = false;      
    if (localStorage.getItem('isLoggedIn') == "true") {      
       status = true;      
    }    
    else {      
       status = false;      
       }      
    return status;      
    }    
   }
  
 

