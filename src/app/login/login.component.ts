import { Component, OnInit } from '@angular/core';
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'

import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  // initialize Email
  initemail:string;
  FORMLOGIN: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  private router: Router,
   private auth: AuthgaurdserviceService
  ) { }

  ngOnInit(): void {

    this.initemail=localStorage.getItem('RememberEmail');
    this.FORMLOGIN = this.formBuilder.group({

      email: [this.initemail, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember:[this.initemail?true:false]
  });
  this.auth.logout(); 
  }

  get f() { return this.FORMLOGIN.controls; }

  onSubmit(){
   
    this.submitted = true;


    if(this.FORMLOGIN.valid){
      console.log(this.FORMLOGIN);
      if( this.FORMLOGIN.value.remember==true || this.FORMLOGIN.value.remember=="True")
      {
        localStorage.setItem('RememberEmail',this.FORMLOGIN.value.email );
      }
      else
      {
        localStorage.setItem('RememberEmail',null);
        localStorage.removeItem('RememberEmail');
      }
      localStorage.setItem('isLoggedIn', "true");
      if(this.FORMLOGIN.value.email=="priyangspatel12345@gmail.com")
      {      localStorage.setItem('Doctor',"true")
      }
      else{
        localStorage.setItem('Doctor',"false")
      }

      this.router.navigate(['../home/patientlist'],{relativeTo :this.route})
     
    }
    else{
      return this.FORMLOGIN.invalid;
    }
    
  }

  onForgot(){
   
    
      this.router.navigate(['../forgotpassword'],{relativeTo :this.route})
     

    
  }

}