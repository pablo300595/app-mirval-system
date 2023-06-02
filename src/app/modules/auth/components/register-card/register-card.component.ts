import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../../validators';

@Component({
  selector: 'register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent {
  registerForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: passwordsMatchValidator });
  }

  registerUser() {}
}
