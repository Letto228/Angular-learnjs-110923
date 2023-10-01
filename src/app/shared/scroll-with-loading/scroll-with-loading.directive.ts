import {Directive, OnInit, Output, EventEmitter, ElementRef, HostListener} from '@angular/core';
import {LoadDirection} from './load-direction';

const BORDER_OFFSET = 100;

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective implements OnInit {
    @Output() loadData = new EventEmitter<LoadDirection>();
    private isSegmentTop = false;
    private isSegmentBottom = false;

    private currentScrollTop = 0;
    private currentScrollBottom: number | null = null;

    constructor(private readonly elementRef: ElementRef) {}

    ngOnInit(): void {
        this.setCurrentScrollBottom();
    }

    private setCurrentScrollBottom(): void {
        const nativeElement = this.elementRef.nativeElement;

        this.currentScrollBottom = nativeElement.scrollHeight - nativeElement.clientHeight;
    }

    @HostListener('scroll', ['$event.target'])
    currentScroll({clientHeight, scrollHeight, scrollTop}: HTMLElement) {
        this.isSegmentTop = scrollTop < BORDER_OFFSET && scrollTop < this.currentScrollTop;
        this.isSegmentBottom =
            scrollTop > this.currentScrollBottom! - BORDER_OFFSET &&
            scrollTop > this.currentScrollTop;

        const loadDirection = ScrollWithLoadingDirective.getLoadDirection(
            this.isSegmentTop,
            this.isSegmentBottom,
        );

        if (loadDirection) {
            this.loadData.emit(loadDirection);
        }

        this.currentScrollTop = scrollTop;
        this.currentScrollBottom = scrollHeight - clientHeight;
    }

    private static getLoadDirection(
        isSegmentTop: boolean,
        isSegmentBottom: boolean,
    ): LoadDirection | null {
        if (isSegmentTop) {
            return LoadDirection.Back;
        }

        if (isSegmentBottom) {
            return LoadDirection.Forward;
        }

        return null;
    }
}
