import {Component, Input, OnInit} from '@angular/core';
import {TeamSandbox} from '../../sandbox/team.sandbox';

@Component({
  selector: 'member-list',
  template: '<mat-card style="padding: 24px 0 0;">' +
    '<mat-card-header style="border-bottom: 1px solid #b6b6b6; padding-bottom: 8px;">Member List</mat-card-header>' +
    '<mat-list style="padding: 0;">' +
    '<mat-list-item style="padding: 0;" *ngFor="let member of members?.members; let i = index">' +
    '<button mat-button type="button" id="b{{i}}" (click)="getClass(i)"' +
    'style="width: 100%; height: 100%; text-align: left;" appHighlight>{{member?.name}}</button>' +
    '</mat-list-item>' +
    '</mat-list>' +
    '</mat-card>',
  styles: [
    '::ng-deep .active {background-color: #5c6bc0; color: #f5f5f5;}',
    '::ng-deep .mat-list-item-content{ padding-left: 0 !important; padding-right: 0 !important; }'
  ]
})
export class MemberList implements OnInit {
  team$;
  members;
  constructor(private teamSandbox: TeamSandbox) {}
  getAction(data: Object) {
    console.log(data);
  }

  ngOnInit(): void {
    this.teamSandbox.team$.subscribe(team => {
      if (team !== undefined) {
       setTimeout(() => {
         if (team[0].members) {
           this.members = team[0].members;
         }
       }, 3000);
      }
    });
  }

  getClass(i) {
    for (let j = 0; j < this.members.length; j++) {
      if (i !== j) {
        document.getElementById(`b${j}`).className = 'mat-button';
      }
    }
  }
}
