import { TestBed, inject } from '@angular/core/testing';

import { DemandeDetailService } from './demande-detail.service';

describe('DemandeDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandeDetailService]
    });
  });

  it('should be created', inject([DemandeDetailService], (service: DemandeDetailService) => {
    expect(service).toBeTruthy();
  }));
});
