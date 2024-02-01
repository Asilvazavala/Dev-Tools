import { Component } from '@angular/core';

import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CardsComponent } from '../../cards/cards.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [SidebarComponent, CardsComponent],
})
export class HomeComponent {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.setCurrentCategory('');
    this.sharedService.setCurrentOrder('Nuevos primero');
    this.sharedService.setCurrentSearch('');
  }
}
