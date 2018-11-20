import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../../../../shared/models';

@Component({
  selector: 'app-project',
  styleUrls: ['./project.component.scss'],
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() detail = new EventEmitter();
  ngOnInit(): void {
  }

  dispatchProjectId(project_id: number) {
    console.log(project_id);
    this.detail.emit(project_id);
  }
}
