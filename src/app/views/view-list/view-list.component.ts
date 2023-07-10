import { Component, inject } from '@angular/core';
import { filter, map } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent {

  public searchText = '';
  public productService = inject(ProductService)


}
