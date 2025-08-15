import { Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

export const expensesRoutes: Routes = [
  { path: '', component: ExpenseListComponent },
  { path: 'new', component: ExpenseFormComponent }
];
