import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  sidebarVisible: boolean = true;
  activeItem: string = 'Dashboard';

  navItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Calendar', icon: 'pi pi-calendar', route: '/calendar' },
    { label: 'Tasks', icon: 'pi pi-check-square', route: '/tasks' },
    { label: 'Messages', icon: 'pi pi-envelope', route: '/messages' },
    { label: 'Files', icon: 'pi pi-folder', route: '/files' },
    { label: 'Settings', icon: 'pi pi-cog', route: '/settings' }
  ];

  setActive(item: string) {
    this.activeItem = item;
    // Add navigation logic here
  }
}


