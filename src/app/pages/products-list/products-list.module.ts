import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { FilterByNamePipe } from '../../shared/filter-by-name/filter-by-name.pipe';
import { MyAsyncModule } from '../../shared/my-async/my-async.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';

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
    PaginationModule,
    MyAsyncModule,
    FilterByNamePipe,
    MatInputModule
  ],
  exports: [ProductsListComponent]
})
export class ProductsListModule {}
