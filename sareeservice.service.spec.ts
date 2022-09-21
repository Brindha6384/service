import { TestBed } from '@angular/core/testing';

import { SareeserviceService } from './sareeservice.service';

describe('SareeserviceService', () => {
  let service: SareeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SareeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
