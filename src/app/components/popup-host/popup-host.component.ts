import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {tap} from 'rxjs';
import {PopupHostService} from './popup-host.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    readonly template$ = this.popupHostService.getPopupTemplate$().pipe(
        tap(popupTemplate => {
            this.emptyPopup = !popupTemplate?.template;
        }),
    );

    @HostBinding('class.empty')
    emptyPopup = true;

    constructor(private readonly popupHostService: PopupHostService) {}

    close(): void {
        this.popupHostService.setPopupTemplate(null);
    }
}
