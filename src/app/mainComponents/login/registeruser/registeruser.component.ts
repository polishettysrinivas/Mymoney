import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import { User } from '../../../common/models/user.model';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RegisteruserComponent> ) { }

  userDetails : User = new User();

  genders = ['Male', 'Female', 'Other'];

  ngOnInit() {
  }
  closeModal() {
    this.dialogRef.close();
  }
  registerNewUser(userDetail : User){
    console.log(userDetail);
  }

}
