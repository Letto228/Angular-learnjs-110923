import {Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    protected productList: IProduct[] = productsMock;

    protected onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }

    protected buyProduct(product: IProduct): void {
        // eslint-disable-next-line no-console
        console.log('Вы купили', product.name, 'по цене', product.price, '$');
    }

    protected trackById(_: number, product: IProduct): string {
        return product._id;
    }
}
