import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterProductNamePipe} from './filter-product-pipe.pipe';

@NgModule({
    declarations: [FilterProductNamePipe],
    imports: [CommonModule],
    exports: [FilterProductNamePipe],
})
export class FilterProductNameModule {}
