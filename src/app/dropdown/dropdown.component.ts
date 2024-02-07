import { Component } from '@angular/core';

import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  dropdownItems = ['Nuevos primero', 'Últimos primero', 'A-Z', 'Z-A'];
  currentOrder = 'Nuevos primero';
  isDropdownOpen = false;

  constructor(private sharedService: SharedService) {}

  handleDropdown(newOrder: string): void {
    this.isDropdownOpen = false;
    this.currentOrder = newOrder;
    this.sharedService.setCurrentOrder(newOrder);
  }
}
