import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebarbutton.html',
  standalone: true
})
export class SidebarButtonComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar(): void {
    this.sidebarToggle.emit();
  }
}
