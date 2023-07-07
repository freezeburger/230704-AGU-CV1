import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDiscountComponent } from './views/view-discount/view-discount.component';
import { ViewListComponent } from './views/view-list/view-list.component';
import { ViewDetailComponent } from './views/view-detail/view-detail.component';
import { NavigationGuard, navigationGuard } from './core/guards/navigation.guard';

const routes: Routes = [
  {
    path: 'home',
    component: ViewDiscountComponent,
    title:'Home'
  },
  {
    path: 'list',
    component: ViewListComponent,
    title:'Product List'
  },
  {
    path: 'product',
    component: ViewDetailComponent,
    title:'Your Selection',
    canActivate:[NavigationGuard]
  },
  {
    path: 'product/:id',
    component: ViewDetailComponent,
    title:'Your Selection'
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
