import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Transaction } from '../../services/transactions/transaction';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transactions/transactioService.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, InputComponent, ButtonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit() {
    this.transactionService.getAllTransactions().subscribe({
      next: (transactions: Transaction[]) => {
        this.transactions = transactions;
        console.log(transactions)
      },
    });
  }
}
