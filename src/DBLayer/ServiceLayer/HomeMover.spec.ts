import { TestBed } from '@angular/core/testing';

import { HomeMover } from './HomeMover.service';

describe('UsersService', () => {
  let service: HomeMover;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeMover);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
