import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transactioService.service';

describe('TransactionServiceService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
