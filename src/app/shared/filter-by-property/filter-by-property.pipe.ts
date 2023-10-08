import {Pipe, PipeTransform} from '@angular/core';
import {isString} from './utils/is-string';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe<T, P extends keyof T> implements PipeTransform {
    transform(
        items: T[] | undefined | null,
        propertyName: P,
        searchPropertyValue: T[P] | null,
    ): T[] | undefined | null {
        return items?.filter(item => {
            const itemPropertyVal = item[propertyName];

            return isString(itemPropertyVal) && isString(searchPropertyValue)
                ? itemPropertyVal.includes(searchPropertyValue)
                : itemPropertyVal === searchPropertyValue;
        });
    }
}
