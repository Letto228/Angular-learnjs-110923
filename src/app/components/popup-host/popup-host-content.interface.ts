import {TemplateRef} from '@angular/core';

export interface IPopupHostContent<T extends object> {
    template: TemplateRef<T>;
    context: T;
}
