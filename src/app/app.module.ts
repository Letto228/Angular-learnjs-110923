import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {HeaderModule} from './components/header/header.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// import {CardProductComponent} from "./pages/products-list/card/card-product/card-product.component";

// Directive

// Components

// Pipe

@NgModule({
    declarations: [AppComponent], // const - es6
    exports: [AppComponent], // module.export = {...} - es6
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
    ], // import {...} from '...module.ts' - es6
    bootstrap: [AppComponent],
})
export class AppModule {}

// Services
