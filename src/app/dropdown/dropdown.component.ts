import { Component } from '@angular/core';

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

  handleDropdown = (newOrder: string) => {
    this.currentOrder = newOrder;
    this.isDropdownOpen = false;
  };
}
