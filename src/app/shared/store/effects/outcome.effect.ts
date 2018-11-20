import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import * as fromProject from '../reducers/project.reducer';
import * as projectActions from '../actions/project.action';
import {OutcomeService} from '../../asyncServices/project/outcome.service';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {OutcomeAttributes} from '../../models/model attributes/model-attributes';
import {Outcome, Project} from '../../models';

@Injectable()
export class OutcomeEffect {
  constructor(
    private actions$: Actions,
    private outcomeService: OutcomeService,
    private appState$: Store<fromProject.State>) {
  }
 @Effect()
  createOutcome$: Observable<Action> = this.actions$.pipe(
    ofType(projectActions.projectActionTypes.CreateOutcome),
    map((action: projectActions.CreateOutcome) => action.payload),
    mergeMap((outcomeAttributes: OutcomeAttributes) =>
      this.outcomeService.store(outcomeAttributes).pipe(
        map(res => res['data']),
        map((outcomes: Outcome[]) => (new projectActions.CreateOutcomeSuccess(outcomes))),
        catchError(err => of(new projectActions.CreateOutcomeFailed(err)))
      )
    )
  );

  @Effect()
    updateOutcome$: Observable<Action> = this.actions$.pipe(
      ofType(projectActions.projectActionTypes.UpdateOutcome),
      map((action: projectActions.UpdateOutcome) => action.payload),
      mergeMap((outcomeAttributes: OutcomeAttributes) =>
        this.outcomeService.update(outcomeAttributes).pipe(
          map(res => res['data']),
          map((outcomes: Outcome[]) => (new projectActions.UpdateOutcomeSuccess(outcomes))),
          catchError(err => of(new projectActions.UpdateOutcomeFailed(err.error.error.message)))
        )
      )
    );
  // ERROR in src/app/shared/store/effects/outcome.effect.ts(24,27):
  // error TS2339: Property 'store' does not exist on type 'OutcomeService'.
}
