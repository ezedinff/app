import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProjectSandbox} from '../../../../sandbox/project.sandbox';
import {Observable} from 'rxjs';
import {Activity, Project} from '../../../../../shared/models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-project-overview',
  styleUrls: ['./project-overview.container.scss'],
  templateUrl: './project-overview.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectOverviewContainer implements OnInit {
  project$: Observable<Project | {}>;
  id;
  activities$;
  constructor(private projectsanbox: ProjectSandbox, private route: ActivatedRoute, private location: Location) {
    // this.route.pathFromRoot[4].params.subscribe(params => this.projectsanbox.setCurrentSelectedProjectId(params['id']));
  }
  ngOnInit(): void {
    this.project$ = this.projectsanbox.getCurrentProject();
    this.activities$ = this.projectsanbox.getCurrentProject().pipe(
      map(project => project['activities']),
      map(activities => activities.map(activity => this.getA(activity)).filter(a => a.featured === true))
    );
  }
  editClicked() {
    console.log('pop up the dialog to edit the data');
  }
  getA (activity: Activity) {
    return {
      id: activity.id,
      name: activity.name,
      start: activity.start_date,
      end: activity.end_date,
      featured: activity.featured,
      status: activity.status.name,
      output: activity.output.name,
      location: activity.kebele.name,
    };
  }
  getActivityTableSetting () {
    return {
      columns: [
        {
          title: 'Activity',
          prop: 'name'
        },
        {
          title: 'start',
          prop: 'start'
        },
        {
          title: 'end',
          prop: 'end'
        },
        {
          title: 'Status',
          prop: 'status'
        },
        {
          title: 'Output',
          prop: 'output'
        },
        {
          title: 'Location',
          prop: 'location'
        },
        {
          title: 'actions'
        }
      ],
      actions: [
        {
          title: 'edit',
          icon: 'edit',
          type: 'edit'
        },
        {
          title: 'favourite',
          icon: 'star',
          type: 'favourite'
        },
        {
          title: 'delete',
          icon: 'delete',
          type: 'delete'
        }
      ]
    };
  }
}
