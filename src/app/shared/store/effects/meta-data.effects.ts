import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LayoutService} from '../../containers/layout/layout.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import * as metaAction from '../actions/meta-data.action';
import {catchError, map, mergeMap} from 'rxjs/operators';

@Injectable()
export class MetaDataEffects {
  constructor(protected action$: Actions, private layoutService: LayoutService) {}
  @Effect()
  loadMetaData$: Observable<Action> = this.action$.pipe(
    ofType(metaAction.metaDataActionTypes.Load),
    mergeMap(meta => this.layoutService.getMetaData().pipe(
      map(res => res.data),
      map(res => (new metaAction.LoadSuccess(res))),
      catchError(err => of(new metaAction.LoadFail(err)))
      )
    )
  );
}
