import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {Store} from '@ngrx/store';
import {ProductsApiService} from '../../shared/products/products-api.service';
import {addProducts, loadProducts} from './products.actions';
import {IState} from '../reducer';

@Injectable()
export class ProductsEffects {
    constructor(
        private readonly action$: Actions,
        private readonly productsApiService: ProductsApiService,
        private readonly store$: Store<IState>,
    ) {}

    readonly loadProducts$ = createEffect(
        () =>
            this.action$.pipe(
                // filter(action => action.type === loadProducts.type),
                ofType(loadProducts),
                switchMap(({subCategoryId}) =>
                    this.productsApiService.getProducts$(subCategoryId).pipe(
                        // tap(products => {
                        //     this.store$.dispatch(addProducts(products));
                        // }),
                        // catchError(() => {
                        //     this.store$.dispatch(addProducts([]));

                        //     return EMPTY;
                        // }),
                        map(products => addProducts(products)),
                        catchError(() => of(addProducts([]))),
                    ),
                ),
            ),
        // {dispatch: false}, // .subscribe();
        {dispatch: true}, // .subscribe((action: Action) => {this.store$.dispatch(action)})
    );
}
