import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IProduct } from '../../../shared/products/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: IProduct | null = null;
  @Output() readonly productToBucket: EventEmitter<IProduct> = new EventEmitter();

  addToBasket(event: Event): void {
    event.stopPropagation();
    if (this.product !== null) {
      this.productToBucket.emit(this.product);
    }
  }
}
