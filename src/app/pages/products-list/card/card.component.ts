import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { getCurrency } from '../../../shared/currency/currency';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() product: IProduct | undefined;

  @Output() readonly buy = new EventEmitter<IProduct['_id']>();

  readonly getCurrency = getCurrency;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  onProductBuy(event: Event) {
    event.stopPropagation();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.buy.emit(this.product!._id);
  }

  isStarActive(starIndex: number): boolean {
    return !!(this.product && this.product.rating >= starIndex);
  }
}
