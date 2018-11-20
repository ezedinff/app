import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProjectSandbox} from '../../sandbox/project.sandbox';
import {Observable} from 'rxjs';
import {Project} from '../../../shared/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-container',
  styleUrls: ['./project.container.scss'],
  templateUrl: './project.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainer implements OnInit{
  title = 'My Projects';
  $projects$: Observable<Project[]>;
  constructor(private projectsanbox: ProjectSandbox, private router: Router) {}
  ngOnInit(): void {
    this.$projects$ = this.projectsanbox.projects$;
  }
  goToOverview(project_id) {
    this.projectsanbox.setCurrentSelectedProjectId(project_id);
    this.router.navigate([`projects/${project_id}/overview`]);
  }
}
