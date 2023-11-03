import { TestBed } from '@angular/core/testing';

import { DataDevService } from './data-dev.service';

describe('DataDevService', () => {
  let service: DataDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
