import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {CardModule} from './pages/products-list/card/card.module';

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
        CardModule,
    ], // import {...} from '...module.ts' - es6
    bootstrap: [AppComponent],
})
export class AppModule {}

// Services
