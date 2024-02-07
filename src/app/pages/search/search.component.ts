import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CardsComponent } from '../../cards/cards.component';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  imports: [SidebarComponent, CardsComponent],
})
export class SearchComponent implements OnInit {
  query = '';

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.sharedService.setCurrentSearch(this.query);
      this.sharedService.setCurrentCategory('');
    });
  }
}
