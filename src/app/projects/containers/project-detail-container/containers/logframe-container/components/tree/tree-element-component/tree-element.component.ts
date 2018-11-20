import {Component, Input, OnInit} from '@angular/core';
import {menus} from '../../../constants/menus';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../dialog-component/dialog.component';
import {ProjectSandbox} from '../../../../../../../sandbox/project.sandbox';
@Component({
  selector: 'app-tree-element',
  styleUrls: ['./tree-element.component.scss'],
  templateUrl: './tree-element.component.html'
})
export class TreeElementComponent implements OnInit {
  @Input() m: number;
  @Input() type: string;
  @Input() id: number;
  @Input() title: string;
  @Input() showToggle: boolean;
  @Input() indicator;
  icon: string;
  menus;
  isShown: boolean;
  @Input() data: Object;
  constructor(private matdialog: MatDialog, private project: ProjectSandbox) {}
  ngOnInit(): void {
    this.icon = (this.type === 'project' && this.showToggle) ? 'expand_more' : 'chevron_right';
    this.menus = menus[this.type];
    this.m = this.showToggle ? this.m : this.m - 3.8;
    this.data = this.type === 'indicator' ? this.indicator : this.data;
    this.matdialog.afterAllClosed.subscribe(() => this.project.setMessagesToNull());
  }
  toggle() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }
  toggleMenu() {
    this.isShown = !this.isShown;
  }
  openDialog(type: string, action: string) {
    let height = 'auto';
    if (type === 'indicator' || type === 'activity' || type === 'milestone') {
      height = '100vh';
    }
    if (action !== 'delete') {
      this.matdialog.open(DialogComponent, {data:
          {'type': type, 'action': action, 'id': this.id, 'from': this.type, 'data': this.data},
        width: '400px', maxWidth: '100vw' , height: height , disableClose: true});
    }
  }
}
