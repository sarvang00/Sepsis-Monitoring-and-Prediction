import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  
  get__patient__list(){
    return this.http.get("/api/PatientList")
  }

  get__Patient__info(Patient_id){
    return this.http.get("/api/getPatient/"+Patient_id)
  }

  AddPatient(Name,Age,DOB,BloodGroup,gender,Allocated,Image,Identification,Mobile,FamilyContactPersonName,FamilyContactPersonRelationship,FamilyContactPersonNumber){

    var generate=<string>Mobile+<string>Name
    var str = new String(generate) 
    var len = str.length
    var id=0;
    for(let i=0;i<len-1;i++){
      id=id+str.charCodeAt(i);
    }
    alert(id)

console.log("str.charAt(0) is:" + str.charCodeAt(0))

    var requestBody = {

      "Name": Name,
      "Age": Age,
      "Patient_id": id,
      "DOB": DOB,
      "BloodGroup": BloodGroup,
      "gender": gender,
      "Allocated":Allocated,
      "Mobile": Mobile,
      "FamilyContactPersonName": FamilyContactPersonName,
      "FamilyContactPersonRelationship": FamilyContactPersonRelationship,
      "FamilyContactPersonNumber": FamilyContactPersonNumber,
      "Image":Image,
      "Identification":Identification

      
     
      
    }
    return this.http.post("/api/AddPatient",requestBody)
  }
}
