import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends BaseService<Transaction>{

  constructor(private injector: Injector) {
    super('transactions', injector)
  }

  getTransactions():Observable<Transaction> {
    return this.getById(1);
  }

  getAllTransactions():Observable<Transaction[]>{
    return this.getAll();
  }
}
