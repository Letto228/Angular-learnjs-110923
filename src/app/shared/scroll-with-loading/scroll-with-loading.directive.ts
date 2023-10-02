import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {IScrollWithLoadingContext} from './scroll-with-loading.interface';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective<T> {
    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<IScrollWithLoadingContext<T>>,
    ) {}
}
