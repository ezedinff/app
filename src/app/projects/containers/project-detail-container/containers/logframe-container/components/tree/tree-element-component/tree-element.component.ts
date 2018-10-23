import {Component, Input, OnInit} from '@angular/core';
import {menus} from '../../../constants/menus';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '../../dialog-component/dialog.component';
@Component({
  selector: 'app-tree-element',
  styleUrls: ['./tree-element.component.scss'],
  templateUrl: './tree-element.component.html'
})
export class TreeElementComponent implements OnInit {
  @Input() m: number;
  @Input() type;
  @Input() id: number;
  @Input() title: string;
  icon: string;
  menus;
  isShown: boolean;
  constructor(private matdialog: MatDialog) {}
  ngOnInit(): void {
    this.icon = 'chevron_right';
    this.menus = menus[this.type];
    console.log(this.type);
  }
  toggle() {
    this.icon = this.icon === 'chevron_right' ? 'expand_more' : 'chevron_right';
  }
  toggleMenu() {
    this.isShown = !this.isShown;
  }
  openDialog(type: string, action: string) {
    let height = '370px';
    if (type === 'indicator' || type === 'activity' || type === 'milestone') {
      height = '100vh';
    }
    if (action !== 'delete') {
      this.matdialog.open(DialogComponent, {data: {'type': type, 'action': action}, width: '400px', maxWidth: '100vw' , height: height , disableClose: true});
    }
  }
}
