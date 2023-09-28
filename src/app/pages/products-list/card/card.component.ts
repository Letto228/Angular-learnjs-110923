import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | null = null;
    @Output() buyBtnClick: EventEmitter<any> = new EventEmitter<any>();

    onProductBuy(event: Event) {
        event.stopPropagation();
        this.buyBtnClick.emit(this.product);
    }

    isStarActive(starIndex: number): boolean {
        return this.product ? this.product.rating >= starIndex : false;
    }
}
