import { TestBed } from '@angular/core/testing';

import { Pagi3Service } from './pagi3.service';

describe('Pagi3Service', () => {
  let service: Pagi3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pagi3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
