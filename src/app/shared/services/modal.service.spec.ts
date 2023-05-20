import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';


import { ModalService } from './modal.service';
import { ViewContainerRef } from '@angular/core';
import * as configActions from './../../config/redux/config.actions';

describe('ModalService', () => {
  let modalService: ModalService;
  let storeMock: jasmine.SpyObj<Store<any>>;
  let viewContainerRefMock: jasmine.SpyObj<ViewContainerRef>;



  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    viewContainerRefMock = jasmine.createSpyObj('ViewContainerRef', ['createComponent', 'clear']);


    TestBed.configureTestingModule({
      providers: [
        ModalService,
        { provide: Store, useValue: storeMock },
        { provide: ViewContainerRef, useValue: viewContainerRefMock }
      ]
    });
    modalService = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(modalService).toBeTruthy();
  });

  it('should update modal configs and create component', () => {
    const config = {
      modalType: 'error',
      modalMessage: 'Test message',
      modalStatus: 'enter'
    };

    modalService.updateModalConfigs(config, viewContainerRefMock, 3000);

    expect(storeMock.dispatch).toHaveBeenCalledTimes(3);
    expect(storeMock.dispatch).toHaveBeenCalledWith(configActions.setConfigModalMessage({ modalMessage: config.modalMessage }));
    expect(storeMock.dispatch).toHaveBeenCalledWith(configActions.setConfigModalStatus({ modalStatus: config.modalStatus }));
    expect(storeMock.dispatch).toHaveBeenCalledWith(configActions.setConfigModalType({ modalType: config.modalType }));
    expect(viewContainerRefMock.createComponent).toHaveBeenCalledTimes(1);
    expect(viewContainerRefMock.clear).not.toHaveBeenCalled();
  });
});
