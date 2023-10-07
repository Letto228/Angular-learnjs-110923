import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from './components/dialog/dialog.module';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProductsListModule } from './pages/products-list/products-list.module';

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    ProductsListModule,
    SidenavModule,
    MatListModule,
    DialogModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
