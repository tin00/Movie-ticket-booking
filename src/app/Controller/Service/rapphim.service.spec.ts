import { TestBed } from '@angular/core/testing';

import { RapphimService } from './rapphim.service';

describe('RapphimService', () => {
  let service: RapphimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapphimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
