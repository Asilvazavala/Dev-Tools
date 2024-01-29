import { Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category/:name',
    component: CategoryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent,
  // },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
