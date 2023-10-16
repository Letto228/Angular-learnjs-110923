import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

import { borderOffset } from './border-offset.const';
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

    const isScrollToBottom = scrollTop > prevScrollTop;
    const lowerScrollPosition = scrollHeight - clientHeight;
    const isIntersectedBottomOffset = lowerScrollPosition - scrollTop < borderOffset;
    const shouldLoadMessagesDown = isScrollToBottom && isIntersectedBottomOffset;

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
