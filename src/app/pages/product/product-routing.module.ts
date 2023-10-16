import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';
// import {QuestionCanLoadGuard} from '../../shared/test-guards/question-can-load.guard';

export const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        // canActivate: [QuestionCanActivateGuard],
        // canActivateChild: [QuestionCanActivateChildGuard],
        // canDeactivate: [QuestionCanDiactivateGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'description',
            },
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: 'type',
                component: TypeComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
