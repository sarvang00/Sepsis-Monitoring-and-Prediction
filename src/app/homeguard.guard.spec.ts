import { TestBed } from '@angular/core/testing';

import { HomeguardGuard } from './homeguard.guard';

describe('HomeguardGuard', () => {
  let guard: HomeguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
