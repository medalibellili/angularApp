import { TestBed } from '@angular/core/testing';

import { TyypeService } from './tyype.service';

describe('TyypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TyypeService = TestBed.get(TyypeService);
    expect(service).toBeTruthy();
  });
});
