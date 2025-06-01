import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titleslide',
  templateUrl: './titleslide.html',
  standalone: true,
  imports: [CommonModule]
})
export class TitleslideComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
}
