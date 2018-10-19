import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as store from '../store';
export abstract class BaseSandbox {
  public loggedUser$: Observable<any> = this.appstate$.select(store.getLoggedUser);
  constructor(protected appstate$: Store<store.State>) {}
}
