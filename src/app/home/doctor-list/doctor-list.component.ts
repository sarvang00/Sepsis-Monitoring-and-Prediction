import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { DoctorService } from 'src/app/service/doctor.service'
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  // retriveing data variables
  public dataofparticulardoctor;
  public alldoctorlist;
  public lengtharray = [];
  public Name = [];
  public doc_id = [];
  public Age = [];
  public TotalCase = [];
  public Image = [];
  // over


  // data for particular doctor
  public Name_: string;
  public Age_: string;
  public Email: string;
  public DOB: string;
  public BloodGroup: string;
  public gender: string;
  public doc_id_: string;

  public UserName: string;
  public Password: string;
  public Aadhar: string;
  public BankAccountNo: string;
  public IFSC: string;
  public Qualification: string;
  public Specialization: string;
  public Mobile: string;
  public EmergencyContactNo: string;
  public FamilyContactPersonName: string;
  public FamilyContactPersonRelationship: string;
  public Image_: string;
  public FamilyContactPersonNumber: string;


  // over
  constructor(private alldoctors: DoctorService,
  ) { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.adddoctor').css('color', 'gray');
      $('.adduser').css('color', 'gray');
      $('.addpatient').css('color', 'gray');
      $('.home').css('color', 'gray');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'gray');
      $('.homet').css('color', 'gray');
      $('.case').css('color', 'gray');

    });
    $(document).ready(function () {
      $('.active-tab2').css('display', 'inline-block');
      $('.as-link2').css('background-color', 'rgb(70, 146, 233)');
      $('.as-link2').css('color', 'white');
      $('.as-link2').css('border-radius', '20px');
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css('background-color', 'white');
      $('.as-link3').css('background-color', 'white');

      $('.as-link1').css('color', 'black');
      $('.as-link1').css('border-radius', '20px');
      $('.active-tab3').css('display', 'none');

      $('.as-link3').css('color', 'black');
      $('.as-link3').css('border-radius', '20px');

    });

    this.alldoctors.get__Doctor__list().subscribe(
      data => {

        this.alldoctorlist = data;
        this.lengtharray = this.alldoctorlist["result"]
        for (var i in this.alldoctorlist["result"]) {


          this.Name[i] = this.alldoctorlist["result"][i]["Name"];
          this.Age[i] = this.alldoctorlist["result"][i]["Age"];
          this.Image[i] = this.alldoctorlist["result"][i]["Image"];
          this.TotalCase[i] = this.alldoctorlist["result"][i]["total_case"];
          this.doc_id[i] = this.alldoctorlist["result"][i]["doc_id"];


          console.log(this.alldoctorlist["result"][i]["Name"])
        }

      },
      err => {
        console.log(err)
      },
      () => {
      }

    )

  }

  docinfo(doc_id) {
    this.alldoctors.get__Doctor__info(doc_id).subscribe(
      data => {

        this.dataofparticulardoctor = data;
        this.Name_ = this.dataofparticulardoctor["output"][0]["Name"]
        this.doc_id_ = this.dataofparticulardoctor["output"][0]["doc_id"]
        this.Age_ = this.dataofparticulardoctor["output"][0]["Age"]
        this.Email = this.dataofparticulardoctor["output"][0]["Email"]
        this.DOB = this.dataofparticulardoctor["output"][0]["DOB"]
        this.BloodGroup = this.dataofparticulardoctor["output"][0]["BloodGroup"]
        this.gender = this.dataofparticulardoctor["output"][0]["gender"]
        this.UserName = this.dataofparticulardoctor["output"][0]["UserName"]
        this.Aadhar = this.dataofparticulardoctor["output"][0]["Aadhar"]
        this.BankAccountNo = this.dataofparticulardoctor["output"][0]["BankAccountNo"]
        this.IFSC = this.dataofparticulardoctor["output"][0]["IFSC"]
        this.Qualification = this.dataofparticulardoctor["output"][0]["Qualification"]
        this.Specialization = this.dataofparticulardoctor["output"][0]["Specialization"]
        this.Mobile = this.dataofparticulardoctor["output"][0]["Mobile"]
        this.EmergencyContactNo = this.dataofparticulardoctor["output"][0]["EmergencyContactNo"]
        this.FamilyContactPersonName = this.dataofparticulardoctor["output"][0]["FamilyContactPersonName"]
        this.FamilyContactPersonRelationship = this.dataofparticulardoctor["output"][0]["FamilyContactPersonRelationship"]
        this.Image_ = this.dataofparticulardoctor["output"][0]["Image"]
        this.FamilyContactPersonNumber = this.dataofparticulardoctor["output"][0]["FamilyContactPersonNumber"]
       

      },
      err => {
        console.log(err)
      },
      () => {
      }

    )
  }


}
