import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "../app/mainComponents/login/login.component";


const routes: Routes = [
  {path: '', component: LoginComponent, data: {message: 'Login Page'}},
  {path: 'login', component: LoginComponent, data: {message: 'Login Page'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
