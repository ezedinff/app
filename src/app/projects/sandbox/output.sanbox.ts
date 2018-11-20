import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {OutputAttributes} from '../../shared/models/model attributes/model-attributes';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
import {CreateOutput, UpdateOutput} from '../../shared/store/actions/project.action';

@Injectable()
export class OutputSanbox extends BaseSandbox {
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
  createOutput(output: OutputAttributes) {
    this.appState$.dispatch(new CreateOutput(output));
  }
  updateOutput(output: OutputAttributes) {
    this.appState$.dispatch(new UpdateOutput(output));
  }
}
