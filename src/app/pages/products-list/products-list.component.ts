import {Component} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productsMock} from 'src/app/shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    readonly products = productsMock;
    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }

    buyProductClick(product: IProduct) {
        // eslint-disable-next-line no-console
        console.log(product);
    }
}
