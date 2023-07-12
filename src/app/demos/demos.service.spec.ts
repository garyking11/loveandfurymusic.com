import { inject, TestBed } from '@angular/core/testing';
import { DemosService } from './demos.service';

describe('DemosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemosService],
    });
  });

  it('should be created', inject([DemosService], (service: DemosService) => {
    expect(service).toBeTruthy();
  }));
});
