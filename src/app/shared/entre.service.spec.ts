import { TestBed } from '@angular/core/testing';

import { EntreService } from './entre.service';

describe('EntreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntreService = TestBed.get(EntreService);
    expect(service).toBeTruthy();
  });
});
