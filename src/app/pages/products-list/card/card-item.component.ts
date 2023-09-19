import {Component} from '@angular/core';
import {IProductImage} from 'src/app/shared/products/product-image.interface';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
    selector: 'app-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
    good: IProduct = productMock;
    goodTitle = this.good.name;
    goodCategory = this.good.subCategory;
    goodImages: IProductImage[] | undefined = this.good.images;
    goodPrice = this.good.price;

    getImage() {
        this.goodImages = this.good.images;

        return this.goodImages[0].url;
    }

    onBuyClick(event: Event) {
        event.stopPropagation();
        // eslint-disable-next-line no-console
        console.log('click');
    }
}
