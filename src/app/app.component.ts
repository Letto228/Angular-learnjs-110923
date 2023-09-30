import {Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    switchTemplate = false;
    closeTemplate = true;

    constructor() {
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 3000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 60000);
        setTimeout(() => {
            this.switchTemplate = !this.switchTemplate;
            // or
            this.closeTemplate = !this.closeTemplate;
        }, 90000);
    }

    // isSidenavOpenedFromApp = false;

    // onMenuClick() {
    //     this.isSidenavOpenedFromApp = !this.isSidenavOpenedFromApp;
    // }
}
