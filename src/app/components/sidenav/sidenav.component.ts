import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() public buttonClickStatus = false;
  @Output() public buttonClickStatusChange = new EventEmitter<boolean>(false);
  @ViewChild(MatDrawer, { static: true }) public readonly drawerComponent?: MatDrawer;
  @ViewChild(MatDrawer, { read: ElementRef, static: false }) private readonly drawerElement?: ElementRef<HTMLElement>;
  @ViewChild('viewport', { static: true, read: ViewContainerRef }) private readonly viewport?: ViewContainerRef;
  @ContentChild('navigationTemplate', { static: true }) private readonly navigationTemplate?: TemplateRef<unknown>;

  ngOnInit() {
    this.insertNavigationTempate();
  }

  public toggleSidenavOpened(): void {
    this.drawerComponent?.toggle();
  }

  public openDialog(): void {
    this.buttonClickStatus = !this.buttonClickStatus;
    this.buttonClickStatusChange.emit(this.buttonClickStatus);
  }

  private insertNavigationTempate(): void {
    if (this.navigationTemplate) {
      this.viewport?.createEmbeddedView(this.navigationTemplate);
    }
  }
}
