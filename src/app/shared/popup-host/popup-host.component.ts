import {
    Component,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    HostBinding,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(template: TemplateRef<unknown> | null) {
        this.viewPopup?.clear();

        if (template) {
            this.viewPopup?.createEmbeddedView(template);
        }
    }

    @ViewChild('viewPopup', {static: true, read: ViewContainerRef})
    private readonly viewPopup?: ViewContainerRef;

    @HostBinding('class.tooltip')
    get viewClear(): boolean {
        return !this?.viewPopup?.length;
    }
}
