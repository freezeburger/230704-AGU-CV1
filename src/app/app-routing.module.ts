import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDiscountComponent } from './views/view-discount/view-discount.component';
import { ViewListComponent } from './views/view-list/view-list.component';
import { ViewDetailComponent } from './views/view-detail/view-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: ViewDiscountComponent
  },
  {
    path: 'list',
    component: ViewListComponent
  },
  {
    path: 'product',
    component: ViewDetailComponent
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
