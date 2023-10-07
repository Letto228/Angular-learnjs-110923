import {
    Directive,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, map, Subscription} from 'rxjs';
import {IPaginationContext} from './pagination-context.interface';
import {groupItems} from './utils/group-items';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges, OnInit, OnDestroy {
    @Input() appPaginationChankSize = 1;
    @Input() appPaginationOf: T[] | undefined | null;
    private readonly currentIndex$ = new BehaviorSubject<number>(0);
    private readonly subscription = new Subscription();
    private groupedItems: Array<{page: number; elements: T[]}> = [];
    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<IPaginationContext<T>>,
    ) {}

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.listenCurrentIndex();
    }

    ngOnChanges({appPaginationOf}: SimpleChanges): void {
        if (appPaginationOf) {
            this.updateView();
        }
    }

    private updateView() {
        const hasViewItems = this.appPaginationOf?.length;

        if (hasViewItems) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.groupedItems = groupItems(this.appPaginationOf!, this.appPaginationChankSize);
            this.currentIndex$.next(0);

            return;
        }

        this.viewContainerRef.clear();
    }

    private listenCurrentIndex() {
        const subscription = this.currentIndex$
            .pipe(map(index => this.getCurrentContext(index, this.groupedItems)))
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });

        this.subscription.add(subscription);
    }

    private getCurrentContext(
        currentIndex: number,
        groupedItems: Array<{page: number; elements: T[]}>,
    ): IPaginationContext<T> {
        return {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $implicit: groupedItems.find(x => x.page === currentIndex)!.elements,
            appPaginationOf: this.appPaginationOf as T[],
            index: currentIndex,
            pageIndexes: groupedItems.map(item => item.page),
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
            selectIndex: index => {
                this.selectIndex(index);
            },
        };
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        const newIndex = nextIndex < this.groupedItems.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const lastIndex = this.groupedItems.length - 1;
        const newIndex = previousIndex >= 0 ? previousIndex : lastIndex;

        this.currentIndex$.next(newIndex);
    }

    private selectIndex(index: number) {
        this.currentIndex$.next(index);
    }
}
