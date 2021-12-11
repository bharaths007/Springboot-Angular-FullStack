import { TestBed } from '@angular/core/testing';

import { ApartmentServiceService } from './apartment-service.service';

describe('ApartmentServiceService', () => {
  let service: ApartmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
