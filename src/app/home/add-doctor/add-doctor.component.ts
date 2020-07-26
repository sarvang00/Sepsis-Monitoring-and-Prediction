import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { FormGroup, FormControl, Validators, FormBuilder,AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {


  
  // model

  FORMDoctorADD: FormGroup;
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
      $('.adddoctor').css('color', 'black');
      $('.adduser').css('color', 'black');
      $('.addpatient').css('color', 'gray');
      $('.home').css('color', 'gray');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'gray');
      $('.case').css('color', 'gray');
    

    });


       // form 

    
       this.FORMDoctorADD = this.formBuilder.group({

      
        Name: ['',[Validators.required,onlycharValidator]],
        DOB: ['',[Validators.required]],
        BloodGroup: ['',[Validators.required,BloodGroupValidator]],
        gender: ['male', [Validators.required]],
        Allocated: ['',[Validators.required]],
        UserName: ['',[Validators.required]],
        Password: ['',[Validators.required,Validators.minLength(6)]],
        Aadhar: ['',[Validators.required,Validators.minLength(12),Validators.maxLength(12),onlynumberValidator]],
        BankAccountNo: ['',[Validators.required,Validators.minLength(16)],onlynumberValidator],
        IFSC: ['',[Validators.required,IFCSValidator]],
        Qualification: ['',[Validators.required,onlycharValidator]],
        Specialization: ['',[Validators.required,onlycharValidator]],
        Email: ['',[Validators.required,Validators.email]],
        Mobile: ['',[Validators.required,phoneNumberValidator,Validators.minLength(10)]],
        EmergencyContactNo: ['',[Validators.required,phoneNumberValidator,Validators.minLength(10)]],
        FamilyContactPersonName: ['',[Validators.required,onlycharValidator]],
        FamilyContactPersonRelationship: ['',[Validators.required,onlycharValidator]],
        FamilyContactPersonNumber: ['',[Validators.required,phoneNumberValidator,Validators.minLength(10)]],

   
    
    });

    

  }


  get fc() { return this.FORMDoctorADD.controls; }

  onSubmit(){
   
    this.submitted = true;


    if(this.FORMDoctorADD.valid){
      console.log(this.FORMDoctorADD);}
    }



}
 
function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^\d+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}

function onlynumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /[0-9]/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}



function BloodGroupValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /(A|B|AB|O)[+-]/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}


function IFCSValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[A-Z]{4}0[A-Z0-9]{6}$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}


function onlycharValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[A-Za-z -]+$/.test(control.value)
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}



