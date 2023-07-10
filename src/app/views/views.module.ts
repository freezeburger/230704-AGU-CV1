import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { ViewDiscountComponent } from './view-discount/view-discount.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    ViewDiscountComponent,
    ViewListComponent,
    ViewDetailComponent,
    FilterPipe
  ],
  exports:[
    ViewDiscountComponent,
    ViewListComponent,
    ViewDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiModule
  ]
})
export class ViewsModule { }
