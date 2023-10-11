import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
import {LoadDirection} from './load-direction';

const BORDER_OFFSET = 100;

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();
    private currentScrollTop = 0;

    @HostListener('scroll', ['$event.target'])
    currentScroll({clientHeight, scrollHeight, scrollTop}: HTMLElement) {
        const isIntersectedTopOffset = scrollTop < BORDER_OFFSET;
        const isScrollToTop = scrollTop < this.currentScrollTop;

        const isSegmentTop = isIntersectedTopOffset && isScrollToTop;
        const currentScrollBottom = scrollHeight - clientHeight;

        const isSegmentBottom =
            scrollTop > currentScrollBottom - BORDER_OFFSET && scrollTop > this.currentScrollTop;

        const loadDirection = this.getLoadDirection(isSegmentTop, isSegmentBottom);

        if (loadDirection) {
            this.loadData.emit(loadDirection);
        }

        this.currentScrollTop = scrollTop;
    }

    getLoadDirection(isSegmentTop: boolean, isSegmentBottom: boolean): LoadDirection | null {
        if (isSegmentTop) {
            return LoadDirection.Back;
        }

        if (isSegmentBottom) {
            return LoadDirection.Forward;
        }

        return null;
    }
}
