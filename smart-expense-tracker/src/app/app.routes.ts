import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { expensesRoutes } from './expenses/expenses.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expenses', children: expensesRoutes },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
