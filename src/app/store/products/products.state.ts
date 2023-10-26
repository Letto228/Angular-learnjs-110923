import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {IProduct} from '../../shared/products/product.interface';

export const PRODUCTS_FEATURE = 'products';

export interface IProductsState extends EntityState<IProduct> {
    // data: IProduct[] | null;
    // entities: {[id: IProduct['_id']]: IProduct};
    // ids: Array<IProduct['_id']>;
    priceRange: {
        min: number;
        max: number;
    };
}

// const products = ids.map(id => entities[id]);

export const productsAdapter = createEntityAdapter<IProduct>({
    selectId: ({_id}: IProduct) => _id,
    // selectId: ({name, price}: IProduct) => name + price,
    sortComparer: (a: IProduct, b: IProduct) => {
        if (a.name > b.name) {
            return 1;
        }

        if (a.name < b.name) {
            return -1;
        }

        return 0;
    },
});

// export const productsInitialState: IProductsState = {
//     entities: {},
//     ids: [],
//     priceRange: {
//         min: 0,
//         max: 999999,
//     },
// };
export const productsInitialState: IProductsState = productsAdapter.getInitialState({
    priceRange: {
        min: 0,
        max: 999999,
    },
});
