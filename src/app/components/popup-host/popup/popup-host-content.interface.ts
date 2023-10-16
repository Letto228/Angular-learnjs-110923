import {TemplateRef} from '@angular/core';

export interface IPopupHostContent<T> {
    template: TemplateRef<T>;
    context: T;
}
