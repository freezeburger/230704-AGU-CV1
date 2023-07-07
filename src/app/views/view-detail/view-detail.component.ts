import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/interfaces/product';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent {
  navigation = inject(NavigationService);

/*
  route = inject(ActivatedRoute);
  productService = inject(ProductService);

  product:Product | undefined;

    ngOnInit(){
      this.route.params.subscribe( params => {
          this.product = this.productService.products$.value.find( p => p.id == params['id'] )
        }
      )
  }
*/
}
