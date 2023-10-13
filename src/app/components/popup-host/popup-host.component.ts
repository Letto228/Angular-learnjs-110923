import {ChangeDetectionStrategy, Component, HostBinding, TemplateRef} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    @HostBinding('class.empty')
    isEmpty = true;

    constructor(private readonly popupService: PopupService) {}

    template$: Observable<TemplateRef<unknown> | null> = this.popupService.popupTemplateRef.pipe(
        tap(value => {
            this.isEmpty = !value;
        }),
    );

    close() {
        this.popupService.clearPopupTemplate();
    }
}
