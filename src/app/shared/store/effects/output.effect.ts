import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {OutcomeService} from '../../asyncServices/project/outcome.service';
import {Action, Store} from '@ngrx/store';
import * as fromProject from '../reducers/project.reducer';
import {Observable, of} from 'rxjs';
import * as projectActions from '../actions/project.action';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {OutcomeAttributes, OutputAttributes} from '../../models/model attributes/model-attributes';
import {Outcome} from '../../models';
import {OutputService} from '../../asyncServices/project/output.service';

@Injectable()
export class OutputEffect {
  constructor(
    private actions$: Actions,
    private outputService: OutputService) {
  }
  @Effect()
  createOutput$: Observable<Action> = this.actions$.pipe(
    ofType(projectActions.projectActionTypes.CreateOutput),
    map((action: projectActions.CreateOutput) => action.payload),
    mergeMap((outputAttributes: OutputAttributes) =>
      this.outputService.store(outputAttributes).pipe(
        map(res => res['data']),
        map((outcomes: Outcome[]) => (new projectActions.CreateOutcomeSuccess(outcomes))),
        catchError(err => of(new projectActions.CreateOutcomeFailed(err)))
      )
    )
  );

  @Effect()
  updateOutcome$: Observable<Action> = this.actions$.pipe(
    ofType(projectActions.projectActionTypes.UpdateOutput),
    map((action: projectActions.UpdateOutput) => action.payload),
    mergeMap((outputAttributes: OutputAttributes) =>
      this.outputService.update(outputAttributes).pipe(
        map(res => res['data']),
        map((outcomes: Outcome[]) => (new projectActions.UpdateOutcomeSuccess(outcomes))),
        catchError(err => of(new projectActions.UpdateOutcomeFailed(err.error.error.message)))
      )
    )
  );
}
