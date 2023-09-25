import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    products = productsMock;
    onCardClick() {
        // eslint-disable-next-line no-console
        // console.log('Card click');
    }

    onBuyProduct() {
        // console.log('Clicked on Buy Product!');
    }
}
