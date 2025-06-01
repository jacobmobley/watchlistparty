import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  standalone: true,
  imports: [CommonModule]
})
export class SettingsComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  closeSettings(): void {
    this.close.emit();
  }
}
