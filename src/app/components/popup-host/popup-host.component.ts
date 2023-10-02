import {Component, Input, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @Input() set template(template: TemplateRef<unknown> | null) {
        this.view?.clear();

        if (template) {
            this.view?.createEmbeddedView(template);
        }
    }

    @ViewChild('view', {static: true, read: ViewContainerRef})
    private readonly view!: ViewContainerRef;

    isEmptyTemplate(): boolean {
        return !this.view.length;
    }
}
