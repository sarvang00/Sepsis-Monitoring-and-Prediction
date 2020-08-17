import { TestBed } from '@angular/core/testing';

import { CaseandVitalService } from './caseand-vital.service';

describe('CaseandVitalService', () => {
  let service: CaseandVitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseandVitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
