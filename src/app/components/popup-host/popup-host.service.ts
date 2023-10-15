import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPopupHostContent} from './popup-host-content.interface';

@Injectable({
    providedIn: 'root',
})
export class PopupHostService {
    private readonly popupTemplate$ = new BehaviorSubject<IPopupHostContent<object> | null>(null);

    getPopupTemplate$(): Observable<IPopupHostContent<object> | null> {
        return this.popupTemplate$.asObservable();
    }

    setPopupTemplate<T extends object>(template: IPopupHostContent<T> | null): void {
        this.popupTemplate$.next(template);
    }
}
