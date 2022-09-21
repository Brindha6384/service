import { TestBed } from '@angular/core/testing';

import { KidserviceService } from './kidservice.service';

describe('KidserviceService', () => {
  let service: KidserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
