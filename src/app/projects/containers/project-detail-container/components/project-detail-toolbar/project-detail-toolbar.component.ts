import {Component, Input, OnInit} from '@angular/core';
import {menus} from './menus';
import {Location} from '@angular/common';

@Component({
  selector: 'app-project-detail-toolbar',
  styleUrls: ['./project-detail-toolbar.component.scss'],
  templateUrl: './project-detail-toolbar.component.html'
})
export class ProjectDetailToolbarComponent implements OnInit {
  menus = menus;
  isShown = false;
  @Input() project_id;
  @Input() title: string;
  constructor(private location: Location) {
  }
  ngOnInit(): void {
  }
  toggleMenu() {
    this.isShown = !this.isShown;
  }
  back() { this.location.back(); }
}
