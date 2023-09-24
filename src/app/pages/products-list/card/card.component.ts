import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';
import {productsMock} from '../../../shared/products/products.mock';
import {IProductForBasket} from '../../../shared/shopping-basket/product-for-basket';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct = productsMock[0];

    @Output() byProductBuyChange = new EventEmitter<IProductForBasket>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        const basketProduct: IProductForBasket = {
            id: this.product._id,
            price: this.product.price,
            name: this.product.name,
        };

        this.byProductBuyChange.emit(basketProduct);
        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}
