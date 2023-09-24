import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {productMock} from '../../../../shared/products/product.mock';

@Component({
    selector: 'app-card-product',
    templateUrl: './card-product.component.html',
    styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({matches}) => {
            if (matches) {
                return [
                    {title: 'Card 1', cols: 1, rows: 1},
                    {title: 'Card 2', cols: 1, rows: 1},
                    {title: 'Card 3', cols: 1, rows: 1},
                    {title: 'Card 4', cols: 1, rows: 1},
                ];
            }

            return [
                {title: 'Card 1', cols: 2, rows: 1},
                {title: 'Card 2', cols: 1, rows: 1},
                {title: 'Card 3', cols: 1, rows: 2},
                {title: 'Card 4', cols: 1, rows: 1},
            ];
        }),
    );

    getImageFromMockByIndex = function (index: number) {
        return productMock.images[index].url;
    };

    constructor(private readonly breakpointObserver: BreakpointObserver) {}
}
