import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LayoutService} from '../../containers/layout/layout.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import * as projectActions from '../actions/project.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
@Injectable()
export class ProjectEffect {
  constructor(protected actions$: Actions, private layoutservice: LayoutService) {}
  @Effect()
  loadMainData: Observable<Action> = this.actions$.pipe(
    ofType(projectActions.projectActionTypes.Load),
    mergeMap(main => this.layoutservice.getMainData()
      .pipe(
        map(res => res.data.length === 1 ? res.data : [res.data]),
        map(res => (new projectActions.LoadSuccess(res))),
        catchError(err => of(new projectActions.LoadFail(err)))
      )
    )
  );
}
