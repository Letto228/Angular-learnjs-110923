import {productsMock} from '../products/products.mock';
import {FilterByPropertyPipe} from './filter-by-property.pipe';

describe('FilterByPropertyPipe', () => {
    let pipe: FilterByPropertyPipe;

    beforeEach(() => {
        pipe = new FilterByPropertyPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('Фильтрация по имени', () => {
        const expectedValue = pipe.transform(productsMock, 'name', productsMock[0].name);

        expect(expectedValue).toEqual([productsMock[0]]);
    });

    it('Фильтрация по не известному id', () => {
        const expectedValue = pipe.transform(productsMock, '_id', 'not-found-id');

        expect(expectedValue).toEqual([]);
    });
});
