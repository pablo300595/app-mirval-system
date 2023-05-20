import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalTypes, ModalStatus, ModalEvents } from './../../models/enums/modal';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state/app-state';
import { Observable } from 'rxjs';
import { ConfigState } from 'src/app/models/state/config-state';

import * as configActions from './../../config/redux/config.actions';

@Component({
  standalone: true,
  selector: 'message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
  imports: [ CommonModule ]
})
export class MessageModalComponent {
  ErrorType = ModalTypes.ErrorType;
  SuccessType = ModalTypes.SuccessType;
  LeaveStatus = ModalStatus.LeaveStatus;

  config$: Observable<ConfigState> = this.store.select('configData');

  constructor(
    private store: Store<AppState>,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.onModalLeave();
  }

  onModalLeave() {
    setTimeout(() => {
      this.store.dispatch(configActions.setConfigModalStatus({ modalStatus: ModalStatus.LeaveStatus }));
    }, 3000);
  }

  closeModal() {
    this.modalService.emitEvent(ModalEvents.CloseModal);
  }

}
