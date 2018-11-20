import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TeamDialogComponent} from '../../components/team-dialog/team-dialog.component';
import {TeamSandbox} from '../../sandbox/team.sandbox';

@Component({
  selector: 'app-team',
  styleUrls: ['./team.container.scss'],
  templateUrl: './team.container.html'
})
export class TeamContainer implements OnInit {
  teams;
  constructor(private matdialog: MatDialog, private teamSandbox: TeamSandbox) {
  }

  openDialog(action: string) {
    this.matdialog.open(TeamDialogComponent,
      {
        data: {'type': 'team', 'action': action},
        width: '400px', maxWidth: '100vw', height: '400px', disableClose: true
      });
  }

  ngOnInit(): void {
    this.teamSandbox.teams$.subscribe(teams => {
      let temp = [];
      for (let i = 0; i < teams.length; i++) {
        temp = temp.concat(teams[i]);
      }
      this.teams = temp;
      console.log(temp);
    });
  }
}
