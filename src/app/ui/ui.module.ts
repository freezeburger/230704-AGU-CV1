import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { UiSearchbarComponent } from './ui-searchbar/ui-searchbar.component';
import { UiImageCarouselComponent } from './ui-image-carousel/ui-image-carousel.component';
import { UiProductListComponent } from './ui-product-list/ui-product-list.component';
import { UiProductDetailComponent } from './ui-product-detail/ui-product-detail.component';
import { UiRatingComponent } from './ui-rating/ui-rating.component';
import { UiSimpleImageComponent } from './ui-simple-image/ui-simple-image.component';
import { UiProductListItemComponent } from './ui-product-list-item/ui-product-list-item.component';
import { UiZoomableDirective } from './ui-zoomable.directive';



@NgModule({
  declarations: [
    UiNavbarComponent,
    UiSearchbarComponent,
    UiImageCarouselComponent,
    UiProductListComponent,
    UiProductDetailComponent,
    UiRatingComponent,
    UiSimpleImageComponent,
    UiProductListItemComponent,
    UiZoomableDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiNavbarComponent,
    UiSearchbarComponent,
    UiImageCarouselComponent,
    UiProductListComponent,
    UiProductDetailComponent,
    UiZoomableDirective
  ]
})
export class UiModule { }
