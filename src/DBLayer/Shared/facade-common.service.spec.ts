import { TestBed } from '@angular/core/testing';

import { FacadeCommonService } from './facade-common.service';

describe('FacadeCommonService', () => {
  let service: FacadeCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
