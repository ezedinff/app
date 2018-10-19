import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  styleUrls: ['./side-menu-item.component.scss'],
  templateUrl: './side-menu-item.component.html'
})
export class SideMenuItemComponent implements OnInit {
  @Input() menu;
  ngOnInit(): void {
  }
}
