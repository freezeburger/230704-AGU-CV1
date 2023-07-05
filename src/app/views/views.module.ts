import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { ViewDiscountComponent } from './view-discount/view-discount.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
    ViewDiscountComponent,
    ViewListComponent,
    ViewDetailComponent
  ],
  exports:[
    ViewDiscountComponent,
    ViewListComponent,
    ViewDetailComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class ViewsModule { }
