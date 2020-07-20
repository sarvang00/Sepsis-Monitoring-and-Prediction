import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'
import * as $ from 'jquery' 
@Component({
  selector: 'app-navbardoctor',
  templateUrl: './navbardoctor.component.html',
  styleUrls: ['./navbardoctor.component.css']
})
export class NavbardoctorComponent implements OnInit {

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


}
