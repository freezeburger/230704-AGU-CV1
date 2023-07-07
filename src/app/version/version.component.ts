import { Component, inject } from '@angular/core';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent {
  productService = inject(ProductService)
}
