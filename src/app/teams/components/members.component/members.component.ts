import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../../shared/models';
import {TeamSandbox} from '../../sandbox/team.sandbox';
import {Team} from '../../../shared/models/team';

@Component({
  selector: 'app-member',
  styleUrls: ['./members.component.scss'],
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  team$;
  constructor(private teamSandbox: TeamSandbox) {}
  getAction(data: Object) {
    console.log(data);
  }

  ngOnInit(): void {
   this.team$ = this.teamSandbox.team$;
  }

}
