import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPopupHostContent} from './popup-host-content.interface';

@Injectable({
    providedIn: 'root',
})
export class PopupService {
    readonly popupTemplateStore$ = new BehaviorSubject<IPopupHostContent<object> | null>(null);

    openPopup<T extends object>(template: IPopupHostContent<T>) {
        this.popupTemplateStore$.next(template);
    }

    closePopup() {
        this.popupTemplateStore$.next(null);
    }
}
