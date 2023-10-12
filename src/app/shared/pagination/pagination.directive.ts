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
import {BehaviorSubject, Subject, filter, map, takeUntil} from 'rxjs';
import {IPaginationContext} from './pagination-context.interface';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges, OnDestroy {
    @Input() appPaginationOf: T[] | undefined | null;
    @Input() appPaginationChankSize = 4;

    private readonly currentIndex$ = new BehaviorSubject<number>(0);
    private readonly destroy$ = new Subject<void>();

    private totalPages = 0;

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<IPaginationContext<T>>,
    ) {}

    ngOnChanges({appPaginationOf}: SimpleChanges): void {
        if (appPaginationOf) {
            this.updateView();
        }
    }

    ngOnInit(): void {
        this.totalPages = this.appPaginationOf
            ? Math.ceil(this.appPaginationOf.length / this.appPaginationChankSize)
            : 0;
        this.listenCurrentIndexChange();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private updateView() {
        if (!this.appPaginationOf?.length) {
            this.viewContainerRef.clear();

            return;
        }

        this.currentIndex$.next(0);
    }

    private listenCurrentIndexChange() {
        this.currentIndex$
            .pipe(
                map(currentIndex => this.getCurrentContext(currentIndex)),
                filter(Boolean),
                takeUntil(this.destroy$),
            )
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getCurrentContext(currentIndex: number): IPaginationContext<T> | null {
        if (!this.appPaginationOf) {
            return null;
        }

        const startIndex = currentIndex * this.appPaginationChankSize;

        return {
            $implicit: this.appPaginationOf.slice(
                startIndex,
                startIndex + this.appPaginationChankSize,
            ),
            index: currentIndex,
            appPaginationOf: this.appPaginationOf,
            pageIndexes: [...new Array(this.totalPages).keys()],
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
        const newIndex = nextIndex < this.totalPages ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private selectIndex(index: number) {
        this.currentIndex$.next(index);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const newIndex = previousIndex >= 0 ? previousIndex : this.totalPages - 1;

        this.currentIndex$.next(newIndex);
    }
}
