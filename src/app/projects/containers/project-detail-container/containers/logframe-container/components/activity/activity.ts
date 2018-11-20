import {Component, OnInit} from '@angular/core';
import {ActivitySandbox} from '../../../../../../sandbox/activity.sandbox';
import {Observable} from 'rxjs';
import {ActivityCategory} from '../../../../../../../shared/models/activity-category';
import {Kebele} from '../../../../../../../shared/models/kebele';

@Component({
  selector: 'activity',
  templateUrl: './activity.html'
})
export class Activity implements OnInit {
  activityCategories$: Observable<ActivityCategory[]>;
  kebeles$: Observable<Kebele[]>;
  statuses$;
  implementers$;
  constructor(private activitySandbox: ActivitySandbox) { }
  ngOnInit(): void {
    this.activityCategories$ = this.activitySandbox.activity_categories;
    this.kebeles$ = this.activitySandbox.kebeles;
    this.statuses$ = this.activitySandbox.statuses;
    this.implementers$ = this.activitySandbox.implementers;
  }
}
