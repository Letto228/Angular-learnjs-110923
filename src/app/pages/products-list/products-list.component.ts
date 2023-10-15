import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProduct } from '../../shared/products/product.interface';
import { productsMock } from '../../shared/products/products.mock';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  products$: Observable<IProduct[]> = of(productsMock);
  findProductByName = '';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  onInputChange(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.findProductByName = input.value.trim();
  }

  trackById(_index: number, item: IProduct): IProduct['_id'] {
    return item._id;
  }
}
