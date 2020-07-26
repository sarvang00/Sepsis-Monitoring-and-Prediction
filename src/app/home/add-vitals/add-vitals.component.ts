import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-add-vitals',
  templateUrl: './add-vitals.component.html',
  styleUrls: ['./add-vitals.component.css']
})
export class AddVitalsComponent implements OnInit {

    // model

    FORMADDVitals: FormGroup;
    submitted = false;
    // model over

  constructor(private formBuilder: FormBuilder,  private route: ActivatedRoute,
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
      $('.vitals').css('color', 'black');
      $('.PRECAUTIONS').css('color', 'gray');
      $('.case').css('color', 'gray');
    

    });

    // form 

    
    this.FORMADDVitals = this.formBuilder.group({

      
      CaseID: ['',[Validators.required]],
      HR: ['',[Validators.required]],
      o2sat: ['',[Validators.required]],
      SBP: ['',[Validators.required]],
      MAP: ['',[Validators.required]],
      Resp: ['',[Validators.required]] 

  
  });

  }

  
  get f() { return this.FORMADDVitals.controls; }

  onSubmit(){
   
    this.submitted = true;


    if(this.FORMADDVitals.valid){
      console.log(this.FORMADDVitals);}
    }

}
