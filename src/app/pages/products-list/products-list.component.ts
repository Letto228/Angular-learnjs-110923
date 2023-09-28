import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    readonly products = productsMock;

    onBuyBtnClick(productId: string) {
        // eslint-disable-next-line no-console
        console.log(this.products.find(x => x._id === productId));
    }
}
