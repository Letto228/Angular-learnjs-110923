import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {SidenavModule} from './components/sidenav/sidenav.module';
import {PopupHostModule} from './components/popup-host/popup-host.module';
import {InsertShadowModule} from './shared/insert-shadow/insert-shadow.module';
import {ProductModule} from './pages/product/product.module';
import {NotFoundModule} from './pages/not-found/not-found.module';

@NgModule({
    declarations: [AppComponent],
    exports: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        ProductModule,
        NotFoundModule,
        SidenavModule,
        MatListModule,
        PopupHostModule,
        InsertShadowModule,
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

//                                      NullInjector

//                                          |

//                                    PlatformInjector

//                                          |

//                              RootInjector(AppModuleInjector)

//                                          |

// -------------------------------------------------------------------------------------------

//                                     AppElementIjector
//                                                        \_________
//                                           |                      \

//                                  SidenavElementInjector           HeaderElementInjector

//                                           |

//                                ProductsListElementInjector
