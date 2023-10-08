import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScrollWithLoadingDirective } from './scroll-with-loading.directive';

@NgModule({
  declarations: [ScrollWithLoadingDirective],
  imports: [CommonModule],
  exports: [ScrollWithLoadingDirective]
})
export class ScrollWithLoadingModule {}
