import {Store} from '@ngrx/store';
import * as store from '../../store';
import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../sandbox/base.sandbox';
import * as metaAction from '../../store/actions/meta-data.action';
import * as projectAction from '../../store/actions/project.action';
import * as myFormAction from '../../store/actions/my-form.action';
@Injectable()
export class LayoutSandbox extends BaseSandbox {
  constructor(protected appState$: Store<store.State>) {
    super(appState$);
  }
  loadMetaData() {
    this.appState$.dispatch(new metaAction.Load());
  }
  loadMainData() {
    this.appState$.dispatch(new projectAction.Load());
  }
  loadForms() {
    this.appState$.dispatch(new myFormAction.Load());
  }
}
