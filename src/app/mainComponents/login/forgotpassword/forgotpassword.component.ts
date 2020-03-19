import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ForgotpasswordComponent>) { }

  ngOnInit() {
  }
  closeModal() {
    this.dialogRef.close();
  }
  recoverPassword(email: string){
    console.log(email);
  }

}
