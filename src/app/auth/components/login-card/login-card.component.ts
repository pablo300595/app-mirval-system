import { Component, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserCredential } from '@angular/fire/auth';
import { AppState } from 'src/app/models/state/app-state';

import { ModalService } from 'src/app/shared/services/modal.service';
import { UserService } from 'src/app/shared/services/user.service';

import { ModalTypes, ModalStatus, ModalMessage } from './../../../models/enums/modal';

import * as authActions from './../../redux/auth.actions';
import * as configActions from './../../../config/redux/config.actions'
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';

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
    password: new FormControl('', [
      Validators.required
    ])
  });

  configUpdates = {
    modalType: ModalTypes.ErrorType,
    modalMessage: ModalMessage.EmptyMessage,
    modalStatus: ModalStatus.EnterStatus
  };

  users: User[] = [];

  loginSubscription: Subscription = new Subscription();
  modalSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private userService: UserService,
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
    this.modalSubscription = this.modalService.getEvent().subscribe((event: string) => {
      this.modalService.removeModal(this.viewContainerRef, 0);
      console.log(event);
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
    this.modalSubscription.unsubscribe();
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.modalService.updateModalConfigs(
        { ...this.configUpdates, modalMessage: ModalMessage.InvalidFormMessage},
        this.viewContainerRef,
        4000
      );
      return;
    }

    this.loginSubscription = this.userService.login(this.loginForm.value).subscribe({
      next: (credentials: UserCredential) => {
        this.store.dispatch(authActions.setUserDataEmail({ email: 'email@gmail.com' }));
        this.store.dispatch(configActions.setConfigModalMessage({ modalMessage: 'welcome modal' }));
        this.router.navigateByUrl(`/config/profile`);
      },
      error: (error: Error) => {
        this.modalService.updateModalConfigs(
          { ...this.configUpdates, modalMessage: error.message },
          this.viewContainerRef,
          4000
        );
        console.error(error);
      }
    });
  }

  goToRegisterPage() {
    this.router.navigateByUrl(`/auth/register`);
  }

}
