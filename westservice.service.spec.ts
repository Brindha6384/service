import { TestBed } from '@angular/core/testing';

import { WestserviceService } from './westservice.service';

describe('WestserviceService', () => {
  let service: WestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
