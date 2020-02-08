import { TestBed } from '@angular/core/testing';

import { TitansService } from './titans.service';

describe('TitansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitansService = TestBed.get(TitansService);
    expect(service).toBeTruthy();
  });
});
