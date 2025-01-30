import { TestBed } from '@angular/core/testing';

import { TransactionServiceService } from './transactioService.service';

describe('TransactionServiceService', () => {
  let service: TransactionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
