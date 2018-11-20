import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {TeamContainer} from './containers/team-container/team.container';
import {TeamListComponent} from './components/team-list-component/team-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TeamDialogComponent} from './components/team-dialog/team-dialog.component';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MembersContainer} from './containers/members-container/members.container';
import {MembersComponent} from './components/members.component/members.component';
import {EzTableModule} from '../shared/components/ez-table/ez-table.module';
import {TeamSandbox} from './sandbox/team.sandbox';
import {TeamComponent} from './components/team/team.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TeamFormDirective} from './directives/team-form.directive';
import {Member} from './components/member/member';
import {UsersList} from './components/users-list/users-list';
import {MemberList} from './components/member-list/member-list';
import {PermissionList} from './components/permission-list/permission-list';
import {HighlightDirective} from './directives/highlight.directive';
const COMPONENT = [
  TeamContainer,
  MembersContainer,
  TeamListComponent,
  TeamDialogComponent,
  MembersComponent,
  TeamFormDirective,
  TeamComponent,
  Member,
  UsersList,
  MemberList,
  PermissionList,
  HighlightDirective
];
const routes: Routes = [
  {path: '', component: TeamContainer},
  {path: ':id/members', component: MembersContainer }
];
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
};
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule,
    EzTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  declarations: COMPONENT,
  exports: [COMPONENT, RouterModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents: [TeamDialogComponent, TeamComponent, Member]
})
export class TeamModule {}
