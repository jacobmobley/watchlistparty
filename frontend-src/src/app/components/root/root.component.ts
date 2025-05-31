import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Landing } from '../../landing/landing';
import { Home } from '../../home/home';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root-page',
  templateUrl: './root.component.html',
  standalone: true,
  imports: [Landing, Home, CommonModule]
})
export class RootComponent {
  constructor(public auth: AuthService) {}
}