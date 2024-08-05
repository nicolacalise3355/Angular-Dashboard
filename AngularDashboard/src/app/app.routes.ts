import { Routes } from '@angular/router';
import { LoginPage } from './features/login/page/login.component';
import { MainLayout } from './core/layout/main-layout/main-layout.component';
import { EmptyLayout } from './core/layout/empty-layout/empty-layout.component';
import { StatsPage } from './features/stats/page/stats.component';

export const routes: Routes = [
  {
    path: '',
    component: EmptyLayout,
    children: [
      { path: '', component: LoginPage },
    ]
  },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', component: StatsPage },
    ]
  },
  { path: '**', redirectTo: '' }
];
