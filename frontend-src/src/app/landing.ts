import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pages/landing.html'
})
export class Landing {
  protected title = 'frontend-src';
}