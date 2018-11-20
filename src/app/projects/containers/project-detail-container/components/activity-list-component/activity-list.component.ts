import {Component, Input} from '@angular/core';
import {Activity} from '../../../../../shared/models';

@Component({
  selector: 'app-activity-list',
  styleUrls: ['./activity-list.component.scss'],
  templateUrl: './activity-list.component.html'
})
export class ActivityListComponent {
 @Input() activities;
 @Input() settings;
}
