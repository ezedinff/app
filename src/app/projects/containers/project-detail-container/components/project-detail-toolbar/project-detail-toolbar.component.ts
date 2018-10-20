import {Component, OnInit} from '@angular/core';
import {menus} from './menus';

@Component({
  selector: 'app-project-detail-toolbar',
  styleUrls: ['./project-detail-toolbar.component.scss'],
  templateUrl: './project-detail-toolbar.component.html'
})
export class ProjectDetailToolbarComponent implements OnInit {
  menus = menus;
  isShown = false;
  ngOnInit(): void {
  }
  toggleMenu() {
    this.isShown = !this.isShown;
  }
}
