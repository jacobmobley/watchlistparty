import { Component } from '@angular/core';
import { SidebarButtonComponent } from './components/sidebarbutton';
import { Sidebar } from './components/sidebar';
import { SettingsComponent } from './components/settings/settings';
import { CommonModule } from '@angular/common';
import { MainContent } from './components/maincontent/maincontent';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
  imports: [SidebarButtonComponent, Sidebar, SettingsComponent, CommonModule, MainContent]
})
export class Home {
  isSidebarOpen = false;
  isSettingsOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen;
  }
}