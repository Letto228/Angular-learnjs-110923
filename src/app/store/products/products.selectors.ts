import {createFeatureSelector} from '@ngrx/store';
import {IProductsState, PRODUCTS_FEATURE, productsAdapter} from './products.state';

export const productsFeatureSelector = createFeatureSelector<IProductsState>(PRODUCTS_FEATURE);
// productsFeatureSelector = (state: IState) => state[PRODUCTS_FEATURE]

// export const selectAll = createSelector(
//     productsFeatureSelector,
//     // productsState => productsState.ids.map(id => productsState.entities[id] as IProduct), // extractFn
//     ({ids, entities}) => ids.map(id => entities[id] as IProduct), // extractFn
// );
// selectAll = (state: IState) => extractFn(productsFeatureSelector(state))

// const selectors = productsAdapter.getSelectors();

// export const selectAll = createSelector(productsFeatureSelector, selectors.selectAll);
// selectAll = (state: IState) => selectors.selectAll(productsFeatureSelector(state))

export const {
    selectAll: productsSelector,
    selectEntities: productsEntitiesSelector,
    selectIds: productsIdsSelector,
    selectTotal: productsTotalSelect,
} = productsAdapter.getSelectors(productsFeatureSelector);

// export const productsSelector = createSelector(
//     productsEntitiesSelector,
//     productsIdsSelector,
//     (entities, ids) => ids.map(id => entities[id] as IProduct),
// );

// export const productByIdSelector = (id: IProduct['_id']) =>
//     createSelector(productsEntitiesSelector, entities => entities[id]);

// export const productByIdSelector = createSelector(
//     productsEntitiesSelector,
//     (entities, id) => entities[id],
// );
