import { Component, OnInit } from '@angular/core';
import { User } from './registroClasses';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  userSignup: User;

  constructor() {
    this.userSignup = new User();
  }

  onSubmitForm(dataForm: any): void {
    console.log(dataForm);
    if (dataForm.form.status === 'VALID') {
      console.log(dataForm.value);
    }
  }

  checkSamePass(repass: string) {
    this.userSignup.repassword = repass;
    if (this.userSignup.repassword === this.userSignup.password) {
      console.log("contraseñas iguales");
    } else {
      console.log("contraseñas diferentes");
    }
  }

  ngOnInit(): void {}
}
