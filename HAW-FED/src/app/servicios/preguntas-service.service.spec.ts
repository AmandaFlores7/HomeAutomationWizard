import { TestBed } from '@angular/core/testing';

import { PreguntasServiceService } from './preguntas-service.service';

describe('PreguntasServiceService', () => {
  let service: PreguntasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
