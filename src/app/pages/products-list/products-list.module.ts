import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ProductsListComponent} from './products-list.component';
import {CardItemComponent} from './card/card-item.component';

@NgModule({
    declarations: [ProductsListComponent, CardItemComponent],
    imports: [CommonModule, MatCardModule],
    exports: [
        ProductsListComponent,
        CardItemComponent,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
    ],
})
export class ProductsListModule {}
