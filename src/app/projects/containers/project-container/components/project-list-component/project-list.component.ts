import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../../../../shared/models';

@Component({
  selector: 'app-project-list',
  styleUrls: ['./project-list.component.scss'],
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit{
  @Input() title;
  @Input() projects: Project[];
  @Output() projectSelected = new EventEmitter();
  ngOnInit(): void {
  }
  detail(e) {
    this.projectSelected.emit(e);
  }

}
