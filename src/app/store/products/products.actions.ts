import {createAction} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';

export enum ProductsActionTypes {
    LoadProducts = '[Products] Load products',
    AddProducts = '[Products] Add products',
    SetMinPrice = '[Products] Set min price',
}

export const loadProducts = createAction(
    ProductsActionTypes.LoadProducts,
    (subCategoryId: string | null) => ({subCategoryId}),
);

export const addProducts = createAction(
    ProductsActionTypes.AddProducts,
    (products: IProduct[]) => ({products}),
);

export const setMinPrice = createAction(ProductsActionTypes.SetMinPrice, (price: number) => ({
    price,
}));

/**
 * addProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}
 */

/**
 * export class AddProducts {
 *      readonly type = ProductsActionTypes.AddProducts;
 *
 *      private readonly products: IProduct[];
 *
 *      constructor(products: IProduct[]) {
 *          this.products = products;
 *      }
 * }
 *
 * export class AddProducts {
 *      readonly type = ProductsActionTypes.AddProducts;
 *
 *      constructor(private readonly products: IProduct[]) {}
 * }
 *
 * new AddProducts([...]) => {type: ProductsActionTypes.AddProducts, products: [...]}
 */
