import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {OutputAttributes} from '../../shared/models/model attributes/model-attributes';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';

@Injectable()
export class OutputSanbox extends BaseSandbox {
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
  createOutput(output: OutputAttributes) {}
  updateOutput(output: OutputAttributes) {}
}
