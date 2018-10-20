import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-list',
  styleUrls: ['./project-list.component.scss'],
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
  @Input() title;
}
