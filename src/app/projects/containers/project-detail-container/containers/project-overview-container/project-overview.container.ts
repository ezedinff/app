import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-overview',
  styleUrls: ['./project-overview.container.scss'],
  templateUrl: './project-overview.container.html'
})
export class ProjectOverviewContainer implements OnInit {
  ngOnInit(): void {
  }
  editClicked() {
    console.log('pop up the dialog to edit the data');
  }
}
