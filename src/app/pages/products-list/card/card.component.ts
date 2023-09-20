import {Component} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from '../../../shared/products/product.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    productMock: IProduct = productMock;

    onBtnClick(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('buy product');
    }
}
