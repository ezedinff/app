import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material';
import {TeamSandbox} from '../../sandbox/team.sandbox';
import {TeamFormDirective} from '../../directives/team-form.directive';
import {TeamComponent} from '../team/team.component';
import {Member} from '../member/member';

@Component({
  selector: 'app-team-dialog',
  styleUrls: ['./team-dialog.component.scss'],
  templateUrl: './team-dialog.component.html'
})
export class TeamDialogComponent implements OnInit {
  title = 'this is title';
  config = {
    suppressScrollX: true,
    useBothWheelAxes: true
  };
  projects;
  components = {
    team: TeamComponent,
    member: Member
  };
  @ViewChild(TeamFormDirective) teamFormDirective: TeamFormDirective;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private teamSandbox: TeamSandbox,
              private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.getTitle(this.data['action'], this.data['type']);
    this.loadComponent(this.components[this.data['type']]);
  }

  getTitle(action: string, type: string) {
    this.title = action === 'create' ? `Create New ${type}` : `Edit the ${type}` ;
  }

  loadComponent(component) {
    const componentFactory = this.resolver.resolveComponentFactory(component);
    const viewContainerRef = this.teamFormDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
