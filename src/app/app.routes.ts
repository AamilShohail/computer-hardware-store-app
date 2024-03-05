import { Routes } from '@angular/router';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user/sign-in', pathMatch: 'full' },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
];
