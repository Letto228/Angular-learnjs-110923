import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { PaginationDirective } from '../../shared/pagination/pagination.directive';

import { CardModule } from './card/card.module';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    CardModule,
    DumpNgIfModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    PaginationDirective
  ],
  exports: [ProductsListComponent]
})
export class ProductsListModule {}
