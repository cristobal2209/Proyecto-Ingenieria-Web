import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { User } from './registroClasses';
>>>>>>> dd

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
<<<<<<< HEAD
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
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
>>>>>>> dd
}
