import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public productsStoreView: IProduct[] | null = null;
  public productsStoreAll: IProduct[] | null = null;
  private startGap = 0;
  private viewGap = 6;
  private scrollMemory: boolean[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.productsStoreAll = productsMock;
      this.productsStoreView = this.getProductsViewElements();
      console.log(this.productsStoreView);
    }, 3000);
  }

  getProductsViewElements(): IProduct[] {
    const productView: IProduct[] = [];
    let itemNum = 0;
    this.productsStoreAll?.forEach((item, index) => {
      if (index >= this.startGap && itemNum < this.viewGap) {
        productView.push(item);
        itemNum = itemNum + 1;
      }
    });
    return productView;
  }

  onProductBuy(id: IProduct['_id']) {
    console.log(id);
  }

  onLoad(value: boolean) {
    this.scrollMemory.push(value);
    let direction = false;
    if (this.productsStoreAll) {
      if (this.scrollMemory.length === 4) {
        const getNumberOfValues = this.scrollMemory.filter(item => !item);
        direction = getNumberOfValues.length <= 1;
        this.scrollMemory = [];
      } else {
        return;
      }
      console.log(direction);
      if (direction) {
        //вниз
        if (this.viewGap === this.productsStoreAll.length) {
          return;
        }
        this.viewGap = this.viewGap + 3;
        this.startGap = this.startGap + 1;
      } else {
        //вверх
        if (this.viewGap === 6) {
          return;
        }
        this.viewGap = this.viewGap - 3;
        this.startGap = this.startGap - 3;
      }
      this.productsStoreView = this.getProductsViewElements();
    }
  }
}
