import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent {
   expenses = [
    { id: 1, title: 'Groceries', amount: 1200 },
    { id: 2, title: 'Electricity Bill', amount: 2500 }
  ];

}
