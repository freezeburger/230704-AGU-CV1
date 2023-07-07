import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './core/services/product.service';
import { VersionComponent } from './version/version.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ViewsModule,
    UiModule,
    NgbModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent, VersionComponent]
})
export class AppModule { }
