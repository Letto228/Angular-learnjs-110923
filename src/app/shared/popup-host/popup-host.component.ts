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
    viewClear = true;

    @Input() set template(template: TemplateRef<unknown> | null) {
        this.viewPopup?.clear();
        this.viewClear = !template;

        if (template) {
            this.viewPopup?.createEmbeddedView(template);
        }
    }

    @ViewChild('viewPopup', {static: true, read: ViewContainerRef})
    private readonly viewPopup?: ViewContainerRef;

    @HostBinding('class') class = 'tooltip';
}
