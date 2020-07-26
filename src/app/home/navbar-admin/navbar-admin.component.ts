import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'
import * as $ from 'jquery' 

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {
  
  }


  onlogout(){
   
    this.auth.logout(); 
    this.router.navigate(['../login'],{relativeTo :this.route})

  
}

onPatient(){
   
  
  this.router.navigate(['./patientlist'],{relativeTo :this.route})


}


onDoctor(){
   
  this.router.navigate(['./Doctorlist'],{relativeTo :this.route})

}

onAnalysis(){
  this.router.navigate(['./Analysis'],{relativeTo :this.route})

}

onHome(){
  this.router.navigate(['./patientlist'],{relativeTo :this.route})

}

onprecautions()
{
  this.router.navigate(['./precautions'],{relativeTo :this.route})

}

oncase(){
  this.router.navigate(['./AddCase'],{relativeTo :this.route})

}


onvitals(){
  this.router.navigate(['./AddVital'],{relativeTo :this.route})
}

onaddDoctor(){
  this.router.navigate(['./AddDoctor'],{relativeTo :this.route})

}

onaddPatient(){
  this.router.navigate(['./AddPatient'],{relativeTo :this.route})

}
}

