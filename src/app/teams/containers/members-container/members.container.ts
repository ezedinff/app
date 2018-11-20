import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TeamDialogComponent} from '../../components/team-dialog/team-dialog.component';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {TeamSandbox} from '../../sandbox/team.sandbox';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-team-members',
  styleUrls: ['./members.container.scss'],
  templateUrl: './members.container.html'
})
export class MembersContainer implements OnInit {
  team$: Observable<any>;
  id;
  teams;
  constructor(private matdialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private teamSandbox: TeamSandbox,
              private location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.teamSandbox.setSelectedTeamId(params['id']);
      this.teamSandbox.teams$.subscribe(teams => {
        let temp = [];
        for (let i = 0; i < teams.length; i++) {
          temp = temp.concat(teams[i]);
        }
        for (let j = 0; j < temp.length; j++) {
          if (temp[j].id === this.id) {
            this.team$ = of(temp[j]);
            console.log('hello');
            break;
          }
          console.log(temp[j]['id'] === Number(params['id']));
        }
      });
    });
  }

  openDialog(action: string) {
    this.matdialog.open(TeamDialogComponent,
      {
        data: {'type': 'member', 'action': action},
        width: '400px', maxWidth: '100vw', height: '400px', disableClose: true
      });
  }
  back() {
    this.location.back();
  }
  ngOnInit(): void {

  }
}
