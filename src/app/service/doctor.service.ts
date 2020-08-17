import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  get__Doctor__list(){
    return this.http.get("/api/AllDoctor")
  }

  get__Doctor__info(doc_id){
    return this.http.get("/api/getDoctor/"+doc_id)
  }

  AddDoctor(Name,Age,DOB,BloodGroup,gender,UserName,Image,Password,Aadhar,BankAccountNo,IFSC,Qualification,Specialization,
    Email,Mobile,EmergencyContactNo,FamilyContactPersonName,FamilyContactPersonRelationship,FamilyContactPersonNumber){

    var generate=<string>Mobile+<string>Email
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
      "doc_id": id,
      "DOB": DOB,
      "BloodGroup": BloodGroup,
      "gender": gender,
      "UserName": UserName,
      "Password": Password,
      "Aadhar": Aadhar,
      "BankAccountNo": BankAccountNo,
      "IFSC": IFSC,
      "Qualification": Qualification,
      "Specialization": Specialization,
      "Email": Email,
      "Mobile": Mobile,
      "EmergencyContactNo": EmergencyContactNo,
      "FamilyContactPersonName": FamilyContactPersonName,
      "FamilyContactPersonRelationship": FamilyContactPersonRelationship,
      "FamilyContactPersonNumber": FamilyContactPersonNumber,
      "Image":Image

      
     
      
    }
    return this.http.post("/api/addDoctor",requestBody)
  }
}
