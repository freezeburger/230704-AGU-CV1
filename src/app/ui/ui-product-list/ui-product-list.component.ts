import { Component, Input, inject } from '@angular/core';
import { ProductPreview } from 'src/app/core/interfaces/product';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-ui-product-list',
  templateUrl: './ui-product-list.component.html',
  styleUrls: ['./ui-product-list.component.scss']
})
export class UiProductListComponent {
  @Input() productList:ProductPreview[] = [];

  navigation = inject(NavigationService)

  select( product:ProductPreview){
    this.navigation.gotoDetail(product);
  }

}
