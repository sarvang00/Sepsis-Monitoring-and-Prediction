import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      $('.adddoctor').css('color', 'gray');
      $('.adduser').css('color', 'gray');
      $('.addpatient').css('color', 'gray');
      $('.home').css('color', 'gray');
      $('.vitals').css('color', 'gray');
      $('.PRECAUTIONS').css('color', 'black');
      $('.case').css('color', 'gray');
    

    });

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
      $('.PRECAUTIONS').css('color', 'black');
      $('.Homet').css('color', 'gray');
      $('.case').css('color', 'gray');

    });
  }

}
 