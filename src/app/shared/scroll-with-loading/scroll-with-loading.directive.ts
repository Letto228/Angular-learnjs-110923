import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

import { borderOffset } from './border-offset.const';
import { isScrollReachedBottomOffcet } from './utils/is-scroll-reached-bottom-offcet';
import { isScrollReachedTopOffcet } from './utils/is-scroll-reached-top-offcet';
@Directive({
  selector: '[appScrollWithLoading]'
})
export class ScrollWithLoadingDirective {
  @Output() loadData = new EventEmitter<boolean>();
  private prevScrollTop = -1;

  @HostListener('scroll', ['$event.target'])
  onScroll({ scrollTop, clientHeight, scrollHeight }: HTMLElement) {
    const prevScrollTop = this.prevScrollTop;
    this.prevScrollTop = scrollTop;
    const lowerScrollPosition = scrollHeight - clientHeight;
    const shouldLoadMessagesDown = lowerScrollPosition - scrollTop < borderOffset && scrollTop > prevScrollTop;

    if (shouldLoadMessagesDown) {
      this.loadData.emit(true);
      return;
    }

    const shouldLoadMessagesTop = scrollTop < borderOffset && scrollTop < prevScrollTop;
    if (shouldLoadMessagesTop) {
      this.loadData.emit(false);
    }
  }
}
