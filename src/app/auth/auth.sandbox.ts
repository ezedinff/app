import {Injectable} from '@angular/core';
import {BaseSandbox} from '../shared/sandbox/base.sandbox';
import * as authActions from '../shared/store/actions/auth.action';
import {Store} from '@ngrx/store';
import * as store from '../shared/store';
import {Observable} from 'rxjs';
import {getLoggedUser} from '../shared/store';

@Injectable()
export class AuthSandbox extends BaseSandbox {
  loggedUser$: Observable<any> = this.appState$.select(getLoggedUser);
  constructor (
    protected appState$: Store<store.State>
  ) {
    super(appState$);
  }
  public getUserDetails(token: string): void {
    localStorage.setItem('token', token);
    this.appState$.dispatch(new authActions.GetUserInfo(token));
  }
}
