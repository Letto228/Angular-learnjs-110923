import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {LoadDirection} from './load-direction';
import {borderOffset} from './scroll-with-loading.const';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Input() isLoading = false;

    @Output() readonly loadResource: EventEmitter<LoadDirection> =
        new EventEmitter<LoadDirection>();

    private prevScrollPosition = 0;

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
        if (this.isLoading) {
            return;
        }

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
