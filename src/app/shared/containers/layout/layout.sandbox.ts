import {Store} from '@ngrx/store';
import * as store from '../../store';
import * as authActions from '../../store/actions/auth.action';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {getLoggedUser} from '../../store';
@Injectable()
export class LayoutSandbox {
  loggedUser$: Observable<any> = this.appState$.select(getLoggedUser);
  constructor(
    protected appState$: Store<store.State>
  ) {
  }
}
