import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';

@Injectable()
export class ActivitySandbox extends BaseSandbox {
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
}

