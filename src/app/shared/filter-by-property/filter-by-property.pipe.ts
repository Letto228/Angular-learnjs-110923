import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from '../products/product.interface';

@Pipe({
  name: 'findItemByName',
  standalone: true
})
export class FilterByPropertyPipe implements PipeTransform {
  transform(items: IProduct[] | undefined | null, searchingProperty: string): IProduct[] | undefined | null {
    if (!items?.length) {
      return items;
    }
    const searchValueUpperCase = searchingProperty.toUpperCase();

    return items.filter(item => item.name.toUpperCase().includes(searchValueUpperCase));
  }
}
