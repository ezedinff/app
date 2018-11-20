import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MyFormService} from '../../asyncServices/my-form/my-form.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {MyFormActionTypes} from '../actions/my-form.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Form} from '../../models/form';
import * as myFormActions from '../actions/my-form.action';
@Injectable()
export class MyFormEffect {
  constructor(private actions$: Actions,
              private myformService: MyFormService) {
  }
  @Effect()
  loadForms$: Observable<Action> = this.actions$.pipe(
    ofType(MyFormActionTypes.Load),
    mergeMap(action => this.myformService.getForms().pipe(
      map(response => response.data),
      map((forms: Form[]) => new myFormActions.LoadSuccess(forms)),
      catchError(err => of(new myFormActions.LoadFail(err)))
    ))
  );
}
