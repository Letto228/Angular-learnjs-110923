import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction';
import {borderOffset} from './scroll-with-loading.const';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() readonly loadResource: EventEmitter<LoadDirection> =
        new EventEmitter<LoadDirection>();

    private prevScrollPosition = 0;

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
        const prevScrollPosition = this.prevScrollPosition;

        this.prevScrollPosition = scrollTop;

        const bottomScrollPosition = scrollHeight - clientHeight;

        if (bottomScrollPosition - scrollTop < borderOffset && scrollTop > prevScrollPosition) {
            this.loadResource.emit(LoadDirection.DOWN);

            return;
        }

        if (scrollTop < borderOffset && scrollTop < prevScrollPosition) {
            this.loadResource.emit(LoadDirection.UP);
        }
    }
}
