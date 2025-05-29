import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-2.5 p-2.5 border-b border-gray-200" [style.background-color]="backgroundColor">
      <button 
        *ngFor="let i of [].constructor(buttonCount); let index = index"
        class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
        [style.background-color]="buttonColor"
        [style.color]="buttonTextColor"
        [style.--hover-color]="buttonHoverColor"
      >
        {{ buttonText }} {{ index + 1 }}
      </button>
    </div>
  `,
  styles: [`
    button:hover {
      background-color: var(--hover-color) !important;
    }
  `]
})
export class ToolbarComponent {
  @Input() backgroundColor = '#f5f5f5';
  @Input() buttonColor = '#007bff';
  @Input() buttonHoverColor = '#0056b3';
  @Input() buttonTextColor = '#ffffff';
  @Input() buttonCount = 4;
  @Input() buttonText = 'Button';
}
