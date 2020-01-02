import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from "../login/login.component";
import { CoreRoutingModule } from "../core/core-routing.module";
import { CoreComponent } from './core.component';
import { RegisteruserComponent } from "../login/registeruser/registeruser.component";


@NgModule({
  declarations: [
    LoginComponent,
    CoreComponent,
    RegisteruserComponent
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
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    RegisteruserComponent
  ],
  entryComponents: [RegisteruserComponent]
})
export class CoreModule { }
