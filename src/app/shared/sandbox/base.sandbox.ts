import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as store from '../store';
import {TimePlan} from '../models/time-plan';
import {Project} from '../models';
import * as projectAction from '../store/actions/project.action';
export abstract class BaseSandbox {
  public loggedUser$: Observable<any> = this.appstate$.select(store.getLoggedUser);
  public time_plans$: Observable<TimePlan[]> = this.appstate$.select(store.timeplans);
  public projects$: Observable<Project[]> = this.appstate$.select(store.projects);
  public currentSelectedId = this.appstate$.select(store.currentSeletectedId);
  public message = this.appstate$.select(store.getMessage);
  public error$ = this.appstate$.select(store.getError);
  constructor(protected appstate$: Store<store.State>) {}
  public setMessagesToNull() {
    this.appstate$.dispatch(new projectAction.EraseMessage());
  }
}
