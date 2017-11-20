import { TestBed, inject } from '@angular/core/testing';

import { BlogsGuardService } from './blogs-guard.service';

describe('BlogsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogsGuardService]
    });
  });

  it('should be created', inject([BlogsGuardService], (service: BlogsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
