import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TeamDialogComponent} from '../../components/team-dialog/team-dialog.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-team-members',
  styleUrls: ['./members.container.scss'],
  templateUrl: './members.container.html'
})
export class MembersContainer implements OnInit {
  constructor(private matdialog: MatDialog, private location: Location) {
  }

  openDialog(action: string) {
    this.matdialog.open(TeamDialogComponent,
      {
        data: {'type': 'team', 'action': action},
        width: '400px', maxWidth: '100vw', height: '400px', disableClose: true
      });
  }
  back() {
    this.location.back();
  }
  ngOnInit(): void {
  }
}
