import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';
import {IProductForBasket} from '../../shared/shopping-basket/product-for-basket';
import {IItemShoppingBasket} from '../../shared/shopping-basket/item-shopping-basket.inerface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    readonly products: IProduct[] = productsMock;
    shoppingBasket: {[id: IProduct['_id']]: IItemShoppingBasket} = {};

    addProductBasket(productForBasket: IProductForBasket) {
        if (this.shoppingBasket[productForBasket.id]) {
            this.shoppingBasket[productForBasket.id].count += 1;
        } else {
            this.shoppingBasket[productForBasket.id] = {productForBasket, count: 1};
        }

        // eslint-disable-next-line no-console
        console.log('Shopping basket: ', this.shoppingBasket);
    }

    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }
}
