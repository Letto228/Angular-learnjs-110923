import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct = {} as IProduct;
    @Output() buyProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

    protected onProductBuy(event: Event) {
        event.stopPropagation();
        this.buyProduct.emit(this.product);
    }

    protected isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}
