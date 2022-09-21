import { TestBed } from '@angular/core/testing';

import { KurthiserviceService } from './kurthiservice.service';

describe('KurthiserviceService', () => {
  let service: KurthiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KurthiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
