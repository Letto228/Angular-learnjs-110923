import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PopupService } from '../../shared/popup/popup.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  readonly templateContent$ = this.popupService.popupTemplateStore$;

  constructor(private readonly popupService: PopupService) {}

  get isViewportClear(): boolean {
    return false;
  }
}
