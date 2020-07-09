import { TestBed } from '@angular/core/testing';

import { LOGINAUTHGuard } from './loginauth.guard';

describe('LOGINAUTHGuard', () => {
  let guard: LOGINAUTHGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LOGINAUTHGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
