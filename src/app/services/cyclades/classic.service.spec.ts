import { TestBed } from '@angular/core/testing';

import { ClassicService } from './classic.service';

describe('ClassicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassicService = TestBed.get(ClassicService);
    expect(service).toBeTruthy();
  });
});
