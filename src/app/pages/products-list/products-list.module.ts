import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DumpNgIfModule } from '../../shared/dump-ng-if/dump-ng-if.module';
import { ScrollWithLoadingModule } from '../../shared/scroll-with-loading/scroll-with-loading.module';

import { CardModule } from './card/card.module';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, CardModule, DumpNgIfModule, MatProgressSpinnerModule, ScrollWithLoadingModule],
  exports: [ProductsListComponent]
})
export class ProductsListModule {}
