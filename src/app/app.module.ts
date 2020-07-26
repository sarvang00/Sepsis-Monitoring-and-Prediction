import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthgaurdserviceService} from './authgaurdservice.service';
import {LOGINAUTHGuard} from './loginauth.guard'
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeguardGuard } from './homeguard.guard';
import { NavbardoctorComponent } from './home/navbardoctor/navbardoctor.component';
import { NavbarAdminComponent } from './home/navbar-admin/navbar-admin.component';
import { PatientListComponent } from './home/patient-list/patient-list.component';
import { DoctorListComponent } from './home/doctor-list/doctor-list.component';
import { ANALYSISComponent } from './home/analysis/analysis.component';
import { PrecautionsComponent } from './home/precautions/precautions.component';
import { AddPatientComponent } from './home/add-patient/add-patient.component';
import { AddDoctorComponent } from './home/add-doctor/add-doctor.component';
import { AddVitalsComponent } from './home/add-vitals/add-vitals.component';
import { AddCaseComponent } from './home/add-case/add-case.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,

    NavbardoctorComponent,
    NavbarAdminComponent,
    PatientListComponent,
    DoctorListComponent,
    ANALYSISComponent,
    PrecautionsComponent,
    AddPatientComponent,
    AddDoctorComponent,
    AddVitalsComponent,
    AddCaseComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent, 
        canActivate:[LOGINAUTHGuard]
      },
      {
        path:'home',
        component: HomeComponent,canActivate:[HomeguardGuard],
        children: [
          {
            path: 'patientlist', // child route path
            component: PatientListComponent // child route component that the router renders
          },
          {
            path: 'Doctorlist', // child route path
            component: DoctorListComponent // child route component that the router renders
          },
          {
            path: 'precautions', // child route path
            component: PrecautionsComponent // child route component that the router renders
          },
          {
            path: 'Analysis', // child route path
            component: ANALYSISComponent // child route component that the router renders
          },
          {
            path: 'AddPatient', // child route path
            component: AddPatientComponent // child route component that the router renders
          },
          {
            path: 'AddDoctor', // child route path
            component: AddDoctorComponent // child route component that the router renders
          },
          {
            path: 'AddVital', // child route path
            component: AddVitalsComponent // child route component that the router renders
          },
          {
            path: 'AddCase', // child route path
            component: AddCaseComponent // child route component that the router renders
          }
        ] 
      },
      {
        path:'forgotpassword',
        component: ForgotpasswordComponent,
      }
    ])
  ],
  providers: [AuthgaurdserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
