import { Inject, Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

export interface ProductResponse {
  products:Product[]
}

@Injectable()
export class ProductService {

  private readonly url = 'https://dummyjson.com/products';

  public products$ = new BehaviorSubject<Product[]>([]);

  // private http = inject(HttpClient);

  constructor(
    // @Inject(HttpClient) private http:HttpClient
    private http:HttpClient
  ) {
    this.load();
  }

  public load(){
    this.http.get<ProductResponse>(this.url).subscribe(data => this.products$.next(data.products) )
  }
}
