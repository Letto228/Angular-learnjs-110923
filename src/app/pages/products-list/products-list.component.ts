import { Component } from '@angular/core';

import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: IProduct[] = productMock;
  private bucket: IProduct[] = [];

  getBucketItem(item: IProduct): void {
    const findItem = this.bucket.find(value => value === item);

    if (!findItem) {
      this.bucket.push(item);
    } else {
      this.bucket = this.bucket.filter(value => value !== item);
    }
  }
}
