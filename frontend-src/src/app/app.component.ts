import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  template: `
  <section class="container">
    <app-toolbar></app-toolbar>
  </section>
  `,
})
export class AppComponent {
  title = 'frontend-src';
}
