import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private currentCategorySubject = new BehaviorSubject<string>('');
  currentCategory$ = this.currentCategorySubject.asObservable();

  setCurrentCategory(category: string): void {
    this.currentCategorySubject.next(category);
  }
}
