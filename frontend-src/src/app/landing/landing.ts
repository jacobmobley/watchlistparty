import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  standalone: true
})
export class Landing {
  constructor(public auth: AuthService) {}

  login(): void {
    // This sends the user to Auth0’s Universal Login
    this.auth.loginWithRedirect();
  }
}
