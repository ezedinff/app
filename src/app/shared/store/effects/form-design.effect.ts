import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {FormDesignService} from '../../asyncServices/form-design/form-design.service';
import {CreateForm, FormDesignActionTypes} from '../actions/form-design.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {FormAttributes} from '../../models/model attributes/model-attributes';
import {CreateFormFailed, CreateFormSuccess} from '../actions/my-form.action';
@Injectable()
export class FormDesignEffect {
  constructor(private actions$: Actions,
              private formDesignService: FormDesignService) {}
  @Effect()
  createForm$: Observable<Action> = this.actions$.pipe(
    ofType(FormDesignActionTypes.CreateForm),
    map((action: CreateForm) => action.payload),
    mergeMap((form: FormAttributes) => this.formDesignService.createForm(form).pipe(
      map(response => (new CreateFormSuccess(response['data']))),
      catchError(err => of((new CreateFormFailed(err))))
    ))
  );
}
