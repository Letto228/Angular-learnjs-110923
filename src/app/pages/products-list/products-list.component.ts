import {Component, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';
import {LoadDirection} from '../../shared/scroll-with-loading/load-direction';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    productsStore: IProduct[] | null = null;

    get products(): IProduct[] | null {
        return this.productsStore;
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.productsStore = productsMock;
        }, 3000);
        // setTimeout(() => {
        //     this.products = null;
        // }, 5000);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    loadResource(direction: LoadDirection) {
        // eslint-disable-next-line no-console
        console.log('Direction is', direction);
    }

    trackById(_: number, item: IProduct): string {
        return item._id;
    }
}
