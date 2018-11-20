import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
import * as myformActions from '../../shared/store/actions/my-form.action';
import {form, forms} from '../../shared/store';
@Injectable()
export class MyFormSandbox extends BaseSandbox {
  forms$ = this.appstate$.select(forms);
  form$ = this.appstate$.select(form);
  constructor (protected appstate$: Store<store.State>) {
    super(appstate$);
  }
  getForms() {
    this.appstate$.dispatch(new myformActions.Load());
  }
  setSelectedFormId(id: number) {
    this.appstate$.dispatch(new myformActions.SetSelectedFormId(id));
  }
}
