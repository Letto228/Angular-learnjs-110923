import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';
import {IProductForBasket} from '../../../shared/shopping-basket/product-for-basket';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | null = null;

    @Output() readonly byProductBuyChange = new EventEmitter<IProductForBasket>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        if (this.product) {
            const basketProduct: IProductForBasket = {
                id: this.product._id,
                price: this.product.price,
                name: this.product.name,
            };

            this.byProductBuyChange.emit(basketProduct);
        }

        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        if (this.product) {
            return this.product.rating >= starIndex;
        }

        return false;
    }

    getFirstProductImageUrl(): string {
        if (this.product) {
            return this.product.images[0].url;
        }

        return '';
    }
}
