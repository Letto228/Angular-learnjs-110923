import {Component} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';
import {productMock} from '../../../shared/products/product.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly productMock: IProduct = productMock;

    buy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('buy');
    }
}
