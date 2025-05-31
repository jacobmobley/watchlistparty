import { Routes } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Landing } from './landing/landing';

export const routes: Routes = [
  { 
    path: 'login', 
    resolve: {
      auth: (auth: AuthService) => {
        auth.loginWithRedirect();
        return true;
      }
    },
    children: []
  },
  { path: '', component: Landing }
];
