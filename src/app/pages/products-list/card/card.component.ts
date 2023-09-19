import {Component} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    onBtnClick(event: Event) {
        event.stopPropagation();
        console.log('hello');
    }
}
