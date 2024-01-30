import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { SharedService } from '../shared.service';
import { cards, cards_props } from '../../utils/constants';
@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  imports: [DropdownComponent],
})
export class CardsComponent implements OnInit {
  currentCategory = '';
  filteredCards: cards_props[] = [];
  selectedDropdownItem = 'Nuevos primero';

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.filteredCards = cards;

    this.sharedService.currentCategory$.subscribe((category) => {
      this.currentCategory = category;
    });

    this.sharedService.currentOrder$.subscribe((order) => {
      this.selectedDropdownItem = order;
      this.filterCardsByCategory();
    });
  }

  private filterCardsByCategory(): void {
    if (this.currentCategory) {
      this.filteredCards = cards
        .filter((card) => card.categories.includes(this.currentCategory))
        .sort(this.sortCards.bind(this));

      this.filteredCards.length === 0 && this.router.navigate(['/not-found']);
    } else if (this.currentCategory === '') {
      this.filteredCards = cards
        .filter((card) => card.categories.includes('populares'))
        .sort(this.sortCards.bind(this));
    } else {
      this.filteredCards = cards.slice().sort(this.sortCards.bind(this));
    }
  }

  private sortCards(a: cards_props, b: cards_props): number {
    switch (this.selectedDropdownItem) {
      case 'Nuevos primero':
        return a.id - b.id;
      case 'Últimos primero':
        return b.id - a.id;
      case 'A-Z':
        return a.title.localeCompare(b.title);
      case 'Z-A':
        return b.title.localeCompare(a.title);
      default:
        return a.id - b.id;
    }
  }
}
