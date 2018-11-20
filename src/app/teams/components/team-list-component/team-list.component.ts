import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Team} from '../../../shared/models/team';
import {MatDialog} from '@angular/material';
import {TeamDialogComponent} from '../team-dialog/team-dialog.component';

@Component({
  selector: 'app-team-list',
  styleUrls: ['./team-list.component.scss'],
  templateUrl: './team-list.component.html'
})
export class TeamListComponent {
  @Input() team: Team;
  constructor(private router: Router, private matdialog: MatDialog) {}
  toMemebers() {
    this.router.navigate(['/teams', this.team.id, 'members']);
  }
  doAction(actionType: string) {
    if (actionType === 'edit') {
      this.matdialog.open(TeamDialogComponent,
        {
          data: {'type': 'team', 'action': actionType},
          width: '400px', maxWidth: '100vw', height: '400px', disableClose: true
        });
    }
  }
}

