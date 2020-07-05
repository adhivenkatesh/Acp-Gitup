import { TestBed } from '@angular/core/testing';

import { TitleheaderService } from './titleheader.service';

describe('TitleheaderService', () => {
  let service: TitleheaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleheaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
