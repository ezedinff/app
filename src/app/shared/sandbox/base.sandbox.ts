import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as store from '../store';
import {TimePlan} from '../models/time-plan';
import {Project} from '../models';
import * as projectAction from '../store/actions/project.action';
<<<<<<< HEAD
=======
import {implementers, kebeles, statuses, activity_categories} from '../store';
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb
export abstract class BaseSandbox {
  public loggedUser$: Observable<any> = this.appstate$.select(store.getLoggedUser);
  public time_plans$: Observable<TimePlan[]> = this.appstate$.select(store.timeplans);
  public projects$: Observable<Project[]> = this.appstate$.select(store.projects);
  public currentSelectedId = this.appstate$.select(store.currentSeletectedId);
  public message = this.appstate$.select(store.getMessage);
  public error$ = this.appstate$.select(store.getError);
<<<<<<< HEAD
=======
  public implementers = this.appstate$.select(implementers);
  public statuses = this.appstate$.select(statuses);
  public kebeles = this.appstate$.select(kebeles);
  public activity_categories = this.appstate$.select(activity_categories);
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb
  constructor(protected appstate$: Store<store.State>) {}
  public setMessagesToNull() {
    this.appstate$.dispatch(new projectAction.EraseMessage());
  }
}
