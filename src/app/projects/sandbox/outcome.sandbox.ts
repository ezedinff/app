import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
import * as projectActions from '../../shared/store/actions/project.action';
import {OutcomeAttributes} from '../../shared/models/model attributes/model-attributes';
@Injectable()
export class OutcomeSandbox extends BaseSandbox {
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
  createOutcome(outcome: OutcomeAttributes) {
    this.appState$.dispatch(new projectActions.CreateOutcome(outcome));
  }
  updateOutcome(outcome: OutcomeAttributes) {
    this.appState$.dispatch(new projectActions.UpdateOutcome(outcome));
  }
}
