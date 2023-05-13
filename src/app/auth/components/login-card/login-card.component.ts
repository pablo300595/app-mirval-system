import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { UserService } from 'src/app/shared/services/user.service';

import * as actions from './../../redux/auth.actions';
import { UserCredential } from '@angular/fire/auth';

@Component({
  selector: 'login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]), 
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private userService: UserService,
    private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.store.select('userData').subscribe(state => {
      console.log(state);
    });
  }

  login(): void {
    this.userService.login(this.loginForm.value).subscribe({
      next: (credentials: UserCredential) => {
        this.store.dispatch(actions.setUserDataEmail({email: 'email@gmail.com'}));
      },
      error:(error) => console.error(error) 
    });
  }

  goToRegisterPage() {
    this.router.navigateByUrl(`/auth/register`);
  }
}
