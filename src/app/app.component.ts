import {ChangeDetectionStrategy, Component} from '@angular/core';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    // constructor(private readonly store$: Store<IState>) {
    // eslint-disable-next-line no-console
    // this.store$.subscribe(console.log);
    // }
}
