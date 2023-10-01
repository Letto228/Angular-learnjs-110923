import {
    Component,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-host-popup',
    templateUrl: './host-popup.component.html',
    styleUrls: ['./host-popup.component.css'],
})
export class HostPopupComponent {
    @ViewChild('modalWrapper', {static: true})
    private readonly modalWrapper?: ElementRef;

    @ViewChild('viewport', {static: true, read: ViewContainerRef})
    private readonly viewport?: ViewContainerRef;

    @Input() set template(template: TemplateRef<unknown> | null) {
        this.viewport?.clear();
        if (template) {
            this.modalWrapper?.nativeElement.classList.remove('not-visible');
            this.viewport?.createEmbeddedView(template);
            return;
        }
        this.modalWrapper?.nativeElement.classList.add('not-visible');
    }
}