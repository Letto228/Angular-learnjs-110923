import {FilterProductNamePipe} from './filter-product-pipe.pipe';

describe('filterProductNamePipe', () => {
    it('create an instance', () => {
        const pipe = new FilterProductNamePipe();

        expect(pipe).toBeTruthy();
    });
});
