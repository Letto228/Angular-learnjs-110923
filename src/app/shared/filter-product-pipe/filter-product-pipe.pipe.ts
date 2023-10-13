import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';
import {FilterProductName} from './filter-product-pipe';

@Pipe({
    name: 'FilterProductName',
})
export class FilterProductNamePipe implements PipeTransform {
    transform(
        items: IProduct[] | undefined | null,
        searchProductName: string,
    ): IProduct[] | undefined | null {
        if (items && items.length) {
            return FilterProductName(items, searchProductName);
        }

        return items;
    }
}
