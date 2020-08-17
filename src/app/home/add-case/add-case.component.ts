import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { CaseandVitalService } from 'src/app/service/caseand-vital.service'

import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrls: ['./add-case.component.css']
})
export class AddCaseComponent implements OnInit {

  // model

  FORMADDCASE: FormGroup; 
  submitted = false;
  // model over


  constructor(private formBuilder: FormBuilder, 
    private addcase:CaseandVitalService,
     private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    
    $(document).ready(function() {
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css( 'background-color', 'white');
      $('.as-link1').css( 'color', 'black');
      $('.as-link1').css( 'border-radius', '20px');
      $('.active-tab2').css('display', 'none');
      $('.as-link2').css( 'background-color', 'white');
      $('.as-link3').css( 'background-color', 'white');
     
      $('.as-link2').css( 'color', 'black');
      $('.as-link2').css( 'border-radius', '20px');
      $('.active-tab3').css('display', 'none');
      
      $('.as-link3').css( 'color', 'black');
      $('.as-link3').css( 'border-radius', '20px');
     
    });

    
    $(document).ready(function() {
      $('.adddoctor').css('color', 'gray');
      $('.adduser').css('color', 'gray');
      $('.addpatient').css('color', 'gray');
      $('.home').css('color', 'gray');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'gray');
      $('.case').css('color', 'black');
    

    });



    // form 

    
    this.FORMADDCASE = this.formBuilder.group({

      
      PatientID: ['',[Validators.required]],
      PrelimnaryAnalysis: ['',[Validators.required]],
      FirstMeet: ['',[Validators.required]],

  
  });

  }

  get f() { return this.FORMADDCASE.controls; }

  onSubmit(){
   
    this.submitted = true;


    if(this.FORMADDCASE.valid){
      console.log(this.FORMADDCASE);
      this.addcase.AddCase(this.FORMADDCASE.value.PatientID,
        this.FORMADDCASE.value.PrelimnaryAnalysis,
        this.FORMADDCASE.value.FirstMeet
        ).subscribe(data =>{
         alert(data["result"]);
        //  if(data["server"][0]["msg"] == "Package created successfully"){
        
        //    this.router.navigate(['./DashboardComponent/packinfoedit'])
        //  }
        //  else{
        //    this.router.navigate(['./DashboardComponent/pack-create'])
        //  }
         
     },
     err => {
       console.log(err['status'])
       if(err['status'] == '400'){
       }
       else if(err['status'] == '500'){
       }
     }
     
     )
    
    }
    }

}
 