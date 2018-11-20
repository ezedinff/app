import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
import * as projectActions from '../../shared/store/actions/project.action';
import {team, teams} from '../../shared/store';

@Injectable({providedIn: 'root'})
export class TeamSandbox extends BaseSandbox {
  teams$ = this.appstate$.select(teams);
  team$= this.appState$.select(team);
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
  setSelectedTeamId(id: number) {
    this.appState$.dispatch(new projectActions.SetSelectedTeamId(id));
  }
}
