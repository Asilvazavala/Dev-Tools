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

  setCurrentCategory(category: string): void {
    this.currentCategorySubject.next(category);
  }

  setCurrentOrder(order: string): void {
    this.currentOrderSubject.next(order);
  }
}
