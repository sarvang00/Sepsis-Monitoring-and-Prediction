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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        canActivate:[LOGINAUTHGuard]
        
      
      
      },
      {
        path: 'home',
        component: HomeComponent,canActivate:[HomeguardGuard]
        
      
      
      },
      {
        path: 'forgotpassword',
        component: ForgotpasswordComponent,
        
      
      
      }])
  ],
  providers: [AuthgaurdserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
