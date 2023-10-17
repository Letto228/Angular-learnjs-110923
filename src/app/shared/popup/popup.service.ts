import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IPopupContent } from './popup-content.interface';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public readonly popupTemplateStore$ = new BehaviorSubject<IPopupContent<object> | null>(null);

  openPopup<T extends object>(popupContent: IPopupContent<T>) {
    this.popupTemplateStore$.next(popupContent);
  }

  closePopup() {
    this.popupTemplateStore$.next(null);
  }
}
