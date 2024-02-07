import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CardsComponent } from '../../cards/cards.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  imports: [SidebarComponent, CardsComponent],
})
export class CategoryComponent implements OnInit {
  currentCategory = '';

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentCategory = params['name'];
      this.sharedService.setCurrentCategory(this.currentCategory);

      this.sharedService.setCurrentSearch('');

      this.sharedService.setCurrentOrder('Nuevos primero');
    });
  }
}
