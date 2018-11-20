import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../../auth/auth.service';
import {Action, Store} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import {Observable, of} from 'rxjs';
import * as authAction from '../actions/auth.action';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private appState$: Store<fromAuth.State>) {
  }

  @Effect()
  getUserDetails$: Observable<Action> = this.actions$.pipe(
    ofType(authAction.AuthActionTypes.GetUserInfo),
    map((action: authAction.GetUserInfo) => action.payload),
    mergeMap((token: string) =>
      this.authService.getUserDetails(token).pipe(
        map(user => (new authAction.GetUserInfoSuccess(user))),
        catchError(err => of(new authAction.GetUserInfoFail(err)))
      )
    )
  );
}
