import {Component, Input} from '@angular/core';
import {Project} from '../../../../../../../../shared/models';

@Component({
  selector: 'app-tree',
  styleUrls: ['./tree.component.scss'],
  templateUrl: './tree.component.html'
})
export class TreeComponent {
  @Input() project: Project;
  isVisible(a) {
    return a === undefined ? false : a.length > 0;
  }
}
