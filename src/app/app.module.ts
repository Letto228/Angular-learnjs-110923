import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from './components/dialog/dialog.module';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';

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
    InsertShadowModule,
    HttpClientModule
  ],
  providers: [
    // ...HeaderModule.providers,
    // ...SidenavModule.providers,
    // {
    //     provide: ProductsStoreService, // token
    //     useClass: ProductsStoreService, // class
    // },
    // ProductsStoreService,
    // {
    //     provide: 'ProductsStore',
    //     // useClass: ProductsStoreService,
    //     useExisting: ProductsStoreService, // token
    // },
    // {
    //     provide: NAME_TOKEN,
    //     useValue: 'Egor',
    // },
    // {
    //     provide: NAME_COPY_TOKEN,
    //     useValue: 'Slava',
    // },
    // {
    //     provide: 'userAge',
    //     useValue: 0,
    // },
    // {
    //     provide: 'name',
    //     useFactory: () => 'Egor', // useValue
    // },
    // {
    //     provide: 'ProductsStore',
    //     useFactory: (productsStoreService: ProductsStoreService) => productsStoreService, // useExisting
    //     deps: [ProductsStoreService],
    // },
    // {
    //     provide: 'products',
    //     useFactory: (productsStoreService: ProductsStoreService) =>
    //         productsStoreService.products$, // useExisting
    //     deps: [ProductsStoreService],
    // },
    // {
    //     provide: ProductsStoreService,
    //     useFactory: (productsApiService: ProductsApiService) =>
    //         new ProductsStoreService(productsApiService), // useClass
    //     deps: [ProductsApiService],
    // },
    // ProductsStoreService,
    // ProductsApiService,
    // {
    //     provide: ProductsApiService,
    //     useClass: ProductsApiService,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// NullInjector

// |

// PlatformInjector

// |

// RootInjector(AppModuleInjector)

// |
// --------------------------------------------------------------------

// AppElementIjector

// |                            \

// SidenavElementInjector           HeaderElementInjector

// |

// ProductsListElementInjector
