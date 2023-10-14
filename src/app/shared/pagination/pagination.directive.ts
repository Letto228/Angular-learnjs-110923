import {
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {IPaginationContext} from './pagination-context.interface';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges {
    @Input() appPaginationOf: T[] | undefined | null;
    @Input() pageSize = 5;

    private readonly currentPage$ = new BehaviorSubject<number>(0);

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<IPaginationContext<T>>,
    ) {}

    ngOnChanges({appPaginationOf, pageSize}: SimpleChanges) {
        if (appPaginationOf || pageSize) {
            this.updateView();
        }
    }

    ngOnInit() {
        this.listenChangePage();
    }

    private updateView() {
        const isViewContainerNeedBeEmpty = !this.appPaginationOf?.length;

        if (isViewContainerNeedBeEmpty) {
            this.viewContainerRef.clear();

            return;
        }

        this.currentPage$.next(0);
    }

    private listenChangePage() {
        this.currentPage$
            .pipe(map(currentPage => this.getCurrentContext(currentPage)))
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getCurrentContext(currentIndex: number): IPaginationContext<T> {
        const from: number = currentIndex * this.pageSize;
        const to: number = currentIndex * this.pageSize + this.pageSize;

        return {
            $implicit: this.appPaginationOf!.slice(from, to),
            currentPage: currentIndex,
            arrayPages: [...new Array(Math.ceil(this.appPaginationOf!.length / this.pageSize))].map(
                (_, i) => i,
            ),
            appPaginationOf: this.appPaginationOf as T[],
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
            selectedPage: (index: number) => {
                this.selectedPage(index);
            },
        };
    }

    private next(): void {
        const nextIndex = this.currentPage$.value + 1;
        const newIndex =
            nextIndex < Math.ceil(this.appPaginationOf!.length / this.pageSize) ? nextIndex : 0;

        this.currentPage$.next(newIndex);
    }

    private back(): void {
        const previousIndex = this.currentPage$.value - 1;
        const lastIndex = Math.trunc(this.appPaginationOf!.length / this.pageSize);
        const newIndex = previousIndex >= 0 ? previousIndex : lastIndex;

        this.currentPage$.next(newIndex);
    }

    private selectedPage(currentPage: number): void {
        this.currentPage$.next(currentPage);
    }

    static ngTemplateContextGuard<T>(
        _directive: PaginationDirective<T>,
        _context: unknown,
    ): _context is IPaginationContext<T> {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    static ngTemplateGuard_appPaginationOf<T>(
        _directive: PaginationDirective<T>,
        _inputValue: T[] | undefined | null,
    ): _inputValue is T[] {
        return true;
    }
}
