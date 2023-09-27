import {
    Component,
    HostBinding,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(template: TemplateRef<unknown> | null) {
        this.viewport?.clear();
        this.isViewportClear = !template;

        if (template) {
            this.viewport?.createEmbeddedView(template);
        }
    }

    @ViewChild('viewport', {static: true, read: ViewContainerRef})
    private readonly viewport?: ViewContainerRef;

    @HostBinding('class.noData')
    isViewportClear = true;
}
