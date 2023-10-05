import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {LoadDirection} from './load-direction';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() readonly loadResource: EventEmitter<LoadDirection> =
        new EventEmitter<LoadDirection>();

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
        // если достигли нижнего края блока
        if (scrollHeight - clientHeight - scrollTop < 100) {
            this.loadResource.emit(LoadDirection.DOWN);

            return;
        }

        // если достигли верхнего края блока
        if (scrollTop < 100) {
            this.loadResource.emit(LoadDirection.UP);
        }
    }
}
