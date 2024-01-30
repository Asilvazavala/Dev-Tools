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

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.filteredCards = cards;

    this.sharedService.currentCategory$.subscribe((category) => {
      this.currentCategory = category;
      this.filterCardsByCategory();
    });
  }

  private filterCardsByCategory(): void {
    if (this.currentCategory) {
      this.filteredCards = cards.filter((card) =>
        card.categories.includes(this.currentCategory)
      );

      this.filteredCards.length === 0 && this.router.navigate(['/not-found']);
    } else if (this.currentCategory === '') {
      this.filteredCards = cards.filter((card) =>
        card.categories.includes('populares')
      );
    } else {
      this.filteredCards = cards;
    }
  }
}
