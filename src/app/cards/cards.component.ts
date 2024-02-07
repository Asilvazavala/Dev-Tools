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
  isCardLoading = true;
  currentCategory = '';
  currentSearch = '';
  currentOrder = 'Nuevos primero';
  changeOrder = true;
  filteredCards: cards_props[] = [];

  onImageLoad(): void {
    this.isCardLoading = false;
  }

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.sharedService.currentCategory$.subscribe((category) => {
      this.currentCategory = category;
      this.changeOrder = true;
      this.filterCards();
    });

    this.sharedService.currentSearch$.subscribe((search) => {
      this.currentSearch = search;
      this.changeOrder = true;
      this.filterCards();
    });

    this.sharedService.currentOrder$.subscribe((order) => {
      if (this.currentOrder !== order) {
        this.changeOrder = false;
      }
      this.currentOrder = order;
      this.filterCards();
    });
  }

  private filterByCategory(filter: string): void {
    this.filteredCards = cards
      .filter((card) => card.categories.includes(filter.toLowerCase()))
      .sort(this.sortCards.bind(this));
  }

  private filterBySearch(search: string): void {
    this.filteredCards = cards
      .filter(
        (card) =>
          card.title.toLowerCase().includes(search.toLowerCase()) ||
          (card.keywords &&
            card.keywords.some((keyword) =>
              keyword.toLowerCase().includes(search.toLowerCase())
            ))
      )
      .sort(this.sortCards.bind(this));
  }

  private filterCards(): void {
    if (this.changeOrder) this.isCardLoading = true;

    if (this.currentCategory) {
      this.filterByCategory(this.currentCategory);
      this.filteredCards.length === 0 && this.router.navigate(['/not-found']);
    } else {
      this.filterByCategory('populares');
    }

    if (this.currentSearch) {
      this.filterBySearch(this.currentSearch);
    }
  }

  private sortCards(a: cards_props, b: cards_props): number {
    switch (this.currentOrder) {
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
