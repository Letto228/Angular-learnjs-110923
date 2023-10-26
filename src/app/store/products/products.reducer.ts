import {createReducer, on} from '@ngrx/store';
import {productsAdapter, productsInitialState} from './products.state';
import {addProducts, setMinPrice} from './products.actions';

export const productsReducer = createReducer(
    productsInitialState,
    on(addProducts, (state, {products}) => productsAdapter.setAll(products, state)),
    on(setMinPrice, (state, {price}) => ({
        ...state,
        priceRange: {
            min: price,
            max: state.priceRange.max,
        },
    })),
);
