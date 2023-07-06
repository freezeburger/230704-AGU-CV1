import { Component, Input } from '@angular/core';
import { ProductPreview } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-ui-product-list-item',
  templateUrl: './ui-product-list-item.component.html',
  styleUrls: ['./ui-product-list-item.component.scss']
})
export class UiProductListItemComponent {
  @Input() product:ProductPreview | null = null;
}
