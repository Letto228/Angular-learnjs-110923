import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @ViewChild('viewport', { read: ViewContainerRef, static: true })
  private readonly viewportViewContainer!: ViewContainerRef;
  get isViewportClear(): boolean {
    return !this.viewportViewContainer.length;
  }
  @Input() set template(template: TemplateRef<unknown> | null) {
    this.viewportViewContainer.clear();

    if (template) {
      this.viewportViewContainer.createEmbeddedView(template);
    }
  }
}
