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
    shoppingBasket: IItemShoppingBasket[] = [];

    addProductBasket(productForBasket: IProductForBasket) {
        let isUpdate = false;

        if (this.shoppingBasket.length) {
            this.shoppingBasket.forEach(itemShoppingBasket => {
                if (itemShoppingBasket.productForBasket.id === productForBasket.id) {
                    itemShoppingBasket.count += 1;
                    isUpdate = true;
                }
            });
        }

        if (!isUpdate) {
            this.shoppingBasket.push({productForBasket, count: 1});
        }

        // eslint-disable-next-line no-console
        console.log('Shopping basket: ', this.shoppingBasket);
    }

    // onCardClick(productForBasket: IProductForBasket) {
    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }
}
