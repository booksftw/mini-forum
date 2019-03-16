import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {


  onLogin(form: NgForm ) {
    console.log(form.value);
  }
}
