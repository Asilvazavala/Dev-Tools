import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [ButtonComponent, SidebarComponent],
})
export class NavbarComponent {
  isMenuOpen = false;
}
