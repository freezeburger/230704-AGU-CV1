import { Component, Input } from '@angular/core';
import { ProductPreview } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-ui-product-list',
  templateUrl: './ui-product-list.component.html',
  styleUrls: ['./ui-product-list.component.scss']
})
export class UiProductListComponent {
  @Input() productList:ProductPreview[] = []
}
