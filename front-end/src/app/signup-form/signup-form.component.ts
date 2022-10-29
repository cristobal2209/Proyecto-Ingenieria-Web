import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  registerForm!: FormGroup;
  password1: any;
  password2: any;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form ->');
    console.log(this.registerForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(30)],
      ],
      password1: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ],
      ],
      password2: [''],
    });
  }
  formValid() {
    return !this.registerForm.valid || this.password1 != this.password2;
  }

  equalPass(): boolean {
    if (this.password1 == this.password2) {
      return true;
    } else {
      return false;
    }
  }
}
