import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction.enum';

export const borderOffset = 100;
@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();
    private prevScrollTopPosition = 0;

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
        // обновили позицию скролла
        const prevScrollTopPosition = this.prevScrollTopPosition;

        this.prevScrollTopPosition = scrollTop;

        const currentScrollPosition = scrollTop;
        const scrollCalculatedBottomPosition = scrollHeight - clientHeight - scrollTop;

        if (
            this.isReachedBottomOffset(
                currentScrollPosition,
                scrollCalculatedBottomPosition,
                prevScrollTopPosition,
            )
        ) {
            this.loadData.emit(LoadDirection.Bottom);
        }

        if (this.isReachedTopOffset(currentScrollPosition, prevScrollTopPosition)) {
            this.loadData.emit(LoadDirection.Top);
        }
    }

    isReachedBottomOffset(
        currentScrollPosition: number,
        scrollCalculatedBottomPosition: number,
        prevScrollTopPosition: number,
    ) {
        return (
            scrollCalculatedBottomPosition < borderOffset &&
            currentScrollPosition > prevScrollTopPosition
        );
    }

    isReachedTopOffset(currentScrollPosition: number, prevScrollTopPosition: number) {
        return (
            currentScrollPosition < borderOffset && currentScrollPosition < prevScrollTopPosition
        );
    }
}
