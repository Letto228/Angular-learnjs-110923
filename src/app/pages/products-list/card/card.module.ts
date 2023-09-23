import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule],
    exports: [CardComponent],
})
export class CardModule {}
