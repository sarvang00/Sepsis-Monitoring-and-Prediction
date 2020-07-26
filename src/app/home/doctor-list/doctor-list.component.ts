import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('.adddoctor').css('color', 'gray');
      $('.adduser').css('color', 'gray');
      $('.addpatient').css('color', 'gray');
      $('.home').css('color', 'gray');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'gray');
      $('.homet').css('color', 'gray');
      $('.case').css('color', 'gray');

    });
    $(document).ready(function() {
      $('.active-tab2').css('display', 'inline-block');
      $('.as-link2').css( 'background-color', 'rgb(70, 146, 233)');
      $('.as-link2').css( 'color', 'white');
      $('.as-link2').css( 'border-radius', '20px');
      $('.active-tab1').css('display', 'none');
      $('.as-link1').css( 'background-color', 'white');
      $('.as-link3').css( 'background-color', 'white');
     
      $('.as-link1').css( 'color', 'black');
      $('.as-link1').css( 'border-radius', '20px');
      $('.active-tab3').css('display', 'none');
      
      $('.as-link3').css( 'color', 'black');
      $('.as-link3').css( 'border-radius', '20px');
      
    });
   
  }

}
