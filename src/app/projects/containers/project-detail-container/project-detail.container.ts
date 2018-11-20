import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectSandbox} from '../../sandbox/project.sandbox';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  styleUrls: ['./project-detail.container.scss'],
  templateUrl: './project-detail.container.html'
})
export class ProjectDetailContainer implements OnInit {
  id;
  $project$;
  constructor(private route: ActivatedRoute, private projectSandbox: ProjectSandbox) {
    this.route.params.subscribe(params => this.projectSandbox.setCurrentSelectedProjectId(+params['id']));
  }
  ngOnInit(): void {
    this.$project$ = this.projectSandbox.getCurrentProject();
  }
}
