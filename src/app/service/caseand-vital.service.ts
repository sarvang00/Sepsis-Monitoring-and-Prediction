import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaseandVitalService {

  constructor(private http:HttpClient) { }

  AddCase(PatientId,Prelimnary_Complains_and_Analysis,First_Meet_of_Case){


    var requestBody = {

      "PatientId": PatientId,
      "Prelimnary_Complains_and_Analysis": Prelimnary_Complains_and_Analysis,
      "First_Meet_of_Case": First_Meet_of_Case
      
    }
    return this.http.post("/api/AddCase",requestBody)
  }


  AddVitals(CaseId,HR,O2_Sat,SBP,MAP,Resp){

    var requestBody = {

      "CaseId": CaseId,
      "HR": HR,
      "O2_Sat": O2_Sat,
      "SBP":SBP,
      "MAP":MAP,
      "Resp":Resp

      
    }
    return this.http.post("/api/AddVitals",requestBody)
  }

}
