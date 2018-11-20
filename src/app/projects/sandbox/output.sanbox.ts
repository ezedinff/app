import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {OutputAttributes} from '../../shared/models/model attributes/model-attributes';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
<<<<<<< HEAD
=======
import {CreateOutput, UpdateOutput} from '../../shared/store/actions/project.action';
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb

@Injectable()
export class OutputSanbox extends BaseSandbox {
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
<<<<<<< HEAD
  createOutput(output: OutputAttributes) {}
  updateOutput(output: OutputAttributes) {}
=======
  createOutput(output: OutputAttributes) {
    this.appState$.dispatch(new CreateOutput(output));
  }
  updateOutput(output: OutputAttributes) {
    this.appState$.dispatch(new UpdateOutput(output));
  }
>>>>>>> 673aec5b843245a586238e95924ad5e973d86ccb
}
