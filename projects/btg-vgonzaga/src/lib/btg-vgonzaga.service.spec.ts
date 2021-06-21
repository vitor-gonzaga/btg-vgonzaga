import { TestBed } from '@angular/core/testing';

import { BtgVgonzagaService } from './btg-vgonzaga.service';

describe('BtgVgonzagaService', () => {
  let service: BtgVgonzagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtgVgonzagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
