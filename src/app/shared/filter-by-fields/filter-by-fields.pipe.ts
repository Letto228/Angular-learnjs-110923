import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByFields',
    pure: false,
})
export class FilterByFieldsPipe implements PipeTransform {
    transform<T, P extends keyof T>(
        items: T[] | undefined | null,
        filterField: P,
        filterValue: T[P],
    ): T[] | undefined | null {
        if (!items?.length) {
            return items;
        }

        if (typeof filterValue === 'string') {
            return items.filter(item =>
                (item[filterField] as string).toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        return items.filter(item => item[filterField] === filterValue);
    }
}
