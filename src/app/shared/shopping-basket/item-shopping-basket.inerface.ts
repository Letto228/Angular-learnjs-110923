import {IProductForBasket} from './product-for-basket';

export interface IItemShoppingBasket {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    productForBasket: IProductForBasket;
    count: number;
}
