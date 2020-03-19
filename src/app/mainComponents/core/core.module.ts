import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatDatepickerModule
} from '@angular/material';


import {MatNativeDateModule} from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from "../login/login.component";
import { CoreRoutingModule } from "../core/core-routing.module";
import { CoreComponent } from './core.component';
import { RegisteruserComponent } from "../login/registeruser/registeruser.component";
import { ForgotpasswordComponent } from "../login/forgotpassword/forgotpassword.component";


@NgModule({
  declarations: [
    LoginComponent,
    CoreComponent,
    RegisteruserComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatDatepickerModule,
    RegisteruserComponent,
    ForgotpasswordComponent
  ],
  entryComponents: [
    RegisteruserComponent,
    ForgotpasswordComponent
  ]
})
export class CoreModule { }
