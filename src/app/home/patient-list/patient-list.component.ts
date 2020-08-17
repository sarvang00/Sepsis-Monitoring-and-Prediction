import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
import { PatientService } from 'src/app/service/patient.service'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  public dataofparticularpatient;
  public allpatientlist;
  public lengtharray = [];
  public Name = [];
  public Patientid = [];
  public Age = [];
  public BloodGroup_= [];
  public doc_id = [];
  public Image = [];
  // over


  // data for particular doctor
  public Name_: string;
  public Age_: string;
  public DOB: string;
  public BloodGroup: string;
  public gender: string;
  public doc_id_: string;
  public Mobile: string;
  public FamilyContactPersonName: string;
  public FamilyContactPersonRelationship: string;
  public Image_: string;
  public FamilyContactPersonNumber: string;
  public allocation:string;

  // over

    constructor( 
      private listpatient:PatientService) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.PRECAUTIONS').css('color', 'gray');
      $('.Homet').css('color', 'black');

    });
    $(document).ready(function() {
      $('.adddoctor').css('color', 'gray');
      $('.adduser').css('color', 'gray');
      $('.addpatient').css('color', 'gray');
      $('.home').css('color', 'black');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'gray');
    

    });

    $(document).ready(function() {
      $('.active-tab1').css('display', 'inline-block');
      $('.as-link1').css( 'background-color', 'rgb(70, 146, 233)');
      $('.as-link1').css( 'color', 'white');
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

    this.listpatient.get__patient__list().subscribe(
      data => {

        this.allpatientlist = data;
        this.lengtharray = this.allpatientlist["result"]
        for (var i in this.allpatientlist["result"]) {


          this.Name[i] = this.allpatientlist["result"][i]["Name"];
          this.Age[i] = this.allpatientlist["result"][i]["Age"];
          this.Image[i] = this.allpatientlist["result"][i]["Image"];
          this.BloodGroup_[i] = this.allpatientlist["result"][i]["BloodGroup"];
          this.doc_id[i] = this.allpatientlist["result"][i]["doc_id"];
          this.Patientid[i] = this.allpatientlist["result"][i]["Patient_id"];


          console.log(this.allpatientlist["result"][i]["Name"])
        }

      },
      err => {
        console.log(err)
      },
      () => {
      }

    )


  

  }

  getPatientInfo(PatientId){
    this.listpatient.get__Patient__info(PatientId).subscribe(
      data => {

        this.dataofparticularpatient = data;
        this.Name_ = this.dataofparticularpatient["output"][0]["Name"]
        this.doc_id_ = this.dataofparticularpatient["output"][0]["doc_id"]
        this.allocation=this.dataofparticularpatient["output"][0]["Allocated"]
        this.Age_ = this.dataofparticularpatient["output"][0]["Age"]
        this.DOB = this.dataofparticularpatient["output"][0]["DOB"]
        this.BloodGroup = this.dataofparticularpatient["output"][0]["BloodGroup"]
        this.gender = this.dataofparticularpatient["output"][0]["gender"]
        this.Mobile = this.dataofparticularpatient["output"][0]["Mobile"]
        this.FamilyContactPersonName = this.dataofparticularpatient["output"][0]["FamilyContactPersonName"]
        this.FamilyContactPersonRelationship = this.dataofparticularpatient["output"][0]["FamilyContactPersonRelationship"]
        this.Image_ = this.dataofparticularpatient["output"][0]["Image"]
        this.FamilyContactPersonNumber = this.dataofparticularpatient["output"][0]["FamilyContactPersonNumber"]
       

      },
      err => {
        console.log(err)
      },
      () => {
      }

    )
  }
}
