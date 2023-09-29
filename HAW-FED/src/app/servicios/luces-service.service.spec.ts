import { TestBed } from '@angular/core/testing';

import { LucesServiceService } from './luces-service.service';

describe('LucesServiceService', () => {
  let service: LucesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LucesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
