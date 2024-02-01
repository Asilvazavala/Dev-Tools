import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private currentCategorySubject = new BehaviorSubject<string>('');
  currentCategory$ = this.currentCategorySubject.asObservable();

  private currentOrderSubject = new BehaviorSubject<string>('Nuevos primero');
  currentOrder$ = this.currentOrderSubject.asObservable();

  private currentSearchSubject = new BehaviorSubject<string>('');
  currentSearch$ = this.currentSearchSubject.asObservable();

  private isCardLoadingSubject = new BehaviorSubject<boolean>(true);
  isCardLoading$ = this.isCardLoadingSubject.asObservable();

  setCurrentCategory(category: string): void {
    this.currentCategorySubject.next(category);
  }

  setCurrentOrder(order: string): void {
    this.currentOrderSubject.next(order);
  }

  setCurrentSearch(search: string): void {
    this.currentSearchSubject.next(search);
  }

  setIsCardLoading(state: boolean): void {
    this.isCardLoadingSubject.next(state);
  }
}
