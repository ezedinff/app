import {Component, OnInit} from '@angular/core';
import {ProjectSandbox} from '../../../../sandbox/project.sandbox';
import {Observable} from 'rxjs';
import {Project} from '../../../../../shared/models';

@Component({
  selector: 'app-logframe',
  styleUrls: ['./logframe.container.scss'],
  templateUrl: './logframe.container.html'
})
export class LogframeContainer implements OnInit{
  project$: Observable<Project | {}>;
  constructor(private projectSandbox: ProjectSandbox) {}

  ngOnInit(): void {
    this.project$ = this.projectSandbox.getCurrentProject();
  }
}
