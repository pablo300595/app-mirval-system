import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
import { CardComponent } from '../../components/card/card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterCardComponent } from './components/register-card/register-card.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    PasswordResetPageComponent,
    LoginCardComponent,
    RegisterCardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CardComponent
  ]
})
export class AuthModule { }
