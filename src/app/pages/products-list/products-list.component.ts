import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap, take, tap} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {IProduct} from '../../shared/products/product.interface';
import {BrandsService} from '../../shared/brands/brands.service';
import {IProductsFilter} from './filter/products-filter.interface';
import {getQueryFromFilter} from './query-params/get-query-from-filter';
import {getFilterFromQuery} from './query-params/get-filter-from-query';
import {IProductsFilterQueryParams} from './query-params/products-filter-query-params.interface';
import {IState} from '../../store/reducer';
import {loadProducts} from '../../store/products/products.actions';
import {productsSelector} from '../../store/products/products.selectors';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            // this.productsStoreService.loadProducts(subCategoryId);
            this.store$.dispatch(loadProducts(subCategoryId));
        }),
        // switchMap(() => this.productsStoreService.products$),
        switchMap(() =>
            this.store$.pipe(
                // tap<IState>(console.log),
                // map(state.products.ids.map(id => state.products.entities[id] as IProduct)),
                // select(state =>
                //     state.products.ids.map(id => state.products.entities[id] as IProduct),
                // ),
                select(productsSelector),
                // tap<IProduct[]>(console.log),
            ),
        ),
    );

    readonly brands$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.brandsService.loadBrands(subCategoryId);
        }),
        switchMap(() => this.brandsService.brands$),
    );

    readonly initialFilter$ = this.activatedRoute.queryParams.pipe(
        take(1),
        map(queryParams => getFilterFromQuery(queryParams as IProductsFilterQueryParams)),
    );

    readonly searchName$ = this.activatedRoute.queryParamMap.pipe(
        map(queryParamMap => queryParamMap.get('name')),
    );

    constructor(
        // private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly brandsService: BrandsService,
        private readonly router: Router,
        private readonly store$: Store<IState>,
    ) {
        // setInterval(() => {
        //     this.store$.dispatch(setMinPrice(100));
        // }, 3000);
        // this.store$.pipe(map(state => state.products.ids)).subscribe(console.log);
        // this.store$
        //     .pipe(select(selectAll))
        //     // eslint-disable-next-line no-console
        //     .subscribe(console.log);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    onFilterChange(filter: IProductsFilter) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: getQueryFromFilter(filter),
        });
    }

    trackById(_index: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}
