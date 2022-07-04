import { TestBed } from '@angular/core/testing';

import { IservService } from './iserv.service';

describe('IservService', () => {
  let service: IservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
