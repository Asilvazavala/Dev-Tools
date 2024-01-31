import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SearchValue {
  search: string;
}

@Component({
  selector: 'app-searchInput',
  standalone: true,
  templateUrl: './searchInput.component.html',
  styleUrl: './searchInput.component.css',
  imports: [],
})
export class SearchInputComponent {
  searchValue: SearchValue = {
    search: '',
  };

  constructor(private router: Router) {}

  handleChange(event: any, fieldName: keyof SearchValue): void {
    this.searchValue[fieldName] = event.target.value;
  }

  onSubmit(): void {
    if (this.searchValue.search.trim() !== '') {
      this.router.navigate(['/search'], {
        queryParams: { query: this.searchValue.search },
      });
    }
  }
}
