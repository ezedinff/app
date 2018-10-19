import {Component, OnInit} from '@angular/core';
import {Menu, menus} from './menus';

@Component({
  selector: 'app-side-menu',
  styleUrls: ['./side-menu.component.scss'],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent implements OnInit {
  public menus: Menu[] = menus;
  ngOnInit(): void {
  }
}
