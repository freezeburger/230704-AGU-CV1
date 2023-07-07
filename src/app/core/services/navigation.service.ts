import { Injectable } from '@angular/core';
import { Product, ProductPreview } from '../interfaces/product';
import { BehaviorSubject, skip } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  selectedProduct$ = new BehaviorSubject<Product | ProductPreview | null>(null);

  constructor(private router: Router) {

    this.selectedProduct$
        .pipe(skip(1))
        .subscribe( product => this.router.navigate(['product', product?.id]) )
  }

  gotoDetail(product: Product | ProductPreview) {
    this.selectedProduct$.next(product);
    // this.router.navigate(['product'])
  }

}
