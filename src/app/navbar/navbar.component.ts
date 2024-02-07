import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { SharedService } from '../shared.service';

import { ButtonComponent } from '../button/button.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [
    ButtonComponent,
    SidebarComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.currentCategory$.subscribe((category) => {
      if (category !== '') this.isMenuOpen = false;
    });

    this.sharedService.currentSearch$.subscribe((search) => {
      if (search !== '') this.isMenuOpen = false;
    });
  }
}
