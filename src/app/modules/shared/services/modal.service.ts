import { Injectable, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AppState } from 'src/app/models/state/app-state';
import { ConfigState } from 'src/app/models/state/config-state';

import * as configActions from '../../config/store/actions/config.actions';
import { MessageModalComponent } from 'src/app/components/message-modal/message-modal.component';
import { ModalMessage, ModalStatus } from 'src/app/models/enums/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private subject = new Subject<string>();

  constructor(private store: Store<AppState>) { }

  emitEvent(event: string) {
    this.subject.next(event);
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  updateModalConfigs(config: ConfigState, viewContainerRef: ViewContainerRef, secondsToClean: number) {
    this.store.dispatch(configActions.setConfigModalMessage({ modalMessage: config.modalMessage }));
    this.store.dispatch(configActions.setConfigModalStatus({ modalStatus: config.modalStatus }));
    this.store.dispatch(configActions.setConfigModalType({ modalType: config.modalType }));
    viewContainerRef.createComponent(MessageModalComponent);
    this.removeModal(viewContainerRef, secondsToClean);
  }

  removeModal(viewContainerRef: ViewContainerRef, secondsToClean: number) {
    setTimeout(() => {
      viewContainerRef.clear();
      this.store.dispatch(configActions.setConfigModalMessage({ modalMessage: ModalMessage.EmptyMessage }));
      this.store.dispatch(configActions.setConfigModalStatus({ modalStatus: ModalStatus.LeaveStatus }));
    }, secondsToClean);
  }

}
