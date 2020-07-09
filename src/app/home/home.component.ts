import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {AuthgaurdserviceService} from 'src/app/authgaurdservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private auth: AuthgaurdserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  onlogout(){
   
    this.auth.logout(); 
    this.router.navigate(['../login'],{relativeTo :this.route})

  
}


}
