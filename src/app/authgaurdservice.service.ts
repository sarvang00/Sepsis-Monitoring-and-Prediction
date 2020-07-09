import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthgaurdserviceService {

  constructor() { }
  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    
    }   
 
}
