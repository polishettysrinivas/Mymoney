import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import SimpleCrypto from "simple-crypto-js";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Login } from '../../common/models/login.model';
import { Variables } from "../../common/constants/variables";
import { RegisteruserComponent } from "./registeruser/registeruser.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }
  simpleCrypto = new SimpleCrypto(Variables.secretKey);

  email = new FormControl('', [Validators.required, Validators.email]);


  login: Login = new Login();

  ngOnInit() {
  }
  userLogin(login) {
    login.password = this.simpleCrypto.encrypt(login.password);
    // this.router.navigate(['/dashboard']);
    console.log(login);
  }
  registerNewUser(): void {
    const dialogRef = this.dialog.open(RegisteruserComponent, {
      disableClose: true, panelClass: 'dailog-md'
    });
  }
  forgotPassword(): void {
    const dialogRef = this.dialog.open(ForgotpasswordComponent, {
      disableClose: true, panelClass: 'dailog-md'
    });
  }

}
