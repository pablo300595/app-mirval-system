import { TestBed } from '@angular/core/testing';

import { PracticeObservableService } from './practice-observable.service';

describe('PracticeObservableService', () => {
  let service: PracticeObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
