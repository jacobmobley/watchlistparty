import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  standalone: true,
  imports: [CommonModule]
})
export class Sidebar {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() openSettings = new EventEmitter<void>();

  constructor(public auth: AuthService) {}

  closeSidebar(): void {
    this.close.emit();
  }

  logout(): void {
    this.auth.logout();
  }

  onSettingsClick(): void {
    this.openSettings.emit();
    this.closeSidebar();
  }
}