import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { PopupHostModule } from './components/popup-host/popup-host.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [
    BrowserModule,
    ProductsListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavModule,
    MatListModule,
    PopupHostModule,
    InsertShadowModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
