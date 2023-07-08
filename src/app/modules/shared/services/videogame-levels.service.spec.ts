import { TestBed } from '@angular/core/testing';

import { VideogameLevelsService } from './videogame-levels.service';

describe('VideogameLevelsService', () => {
  let service: VideogameLevelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogameLevelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
