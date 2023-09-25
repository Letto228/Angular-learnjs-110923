import {Component, EventEmitter, Input, Output} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly product = productsMock[0];
    // @Input() data?: {title: string; imgPath: string; description: string} ;
    @Input() data: {title: string; imgPath: string; description: string} | undefined;
    @Output() buy = new EventEmitter();

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log(`User pressed on 'Buy product'`);
        this.buy.emit();
    }

    isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}
