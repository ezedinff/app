import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-toolbar',
  styles: [
  ':host{z-index: 4} '],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav;
  @Input() matDrawerShow;
  @Input() drawer;
  @Input() user: User;
  ngOnInit(): void {
  }
}
