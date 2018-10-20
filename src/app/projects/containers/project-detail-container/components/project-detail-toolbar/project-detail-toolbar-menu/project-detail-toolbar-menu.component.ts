import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project-detail-toolbar-menu',
  styleUrls: ['./project-detail-toolbar-menu.scss'],
  templateUrl: './project-detail-toolbar-menu.html'
})
export class ProjectDetailToolbarMenuComponent {
  @Input() menus;
  @Output() toggleMenu = new EventEmitter();
  toggle($event) {
    this.toggleMenu.emit();
  }
}
