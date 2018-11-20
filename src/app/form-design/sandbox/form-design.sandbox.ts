import {Injectable} from '@angular/core';
import {BaseSandbox} from '../../shared/sandbox/base.sandbox';
import {Store} from '@ngrx/store';
import * as store from '../../shared/store';
import * as formDesignAction from '../../shared/store/actions/form-design.action';
import {BaseElement} from '../../shared/models/BaseElement';
import {FormAttributes} from '../../shared/models/model attributes/model-attributes';

@Injectable()
export class FormDesignSandbox extends BaseSandbox {
  elements$ = this.appstate$.select(store.elements);
  updated$ = this.appstate$.select(store.updated);
  currentSelectedElementId$ = this.appstate$.select(store.currentSelectedElement);
  element$ = this.appstate$.select(store.getElement);
  formName$ = this.appstate$.select(store.form_name);
  constructor (protected appstate$: Store<store.State>) {
    super(appstate$);
  }
  createNewElement(element: BaseElement) {
    this.appstate$.dispatch(new formDesignAction.CreateElement(element));
  }
  updateElement(element: BaseElement) {
    this.appstate$.dispatch(new formDesignAction.UpdateElement(element));
  }
  setCurrentSelectedElementId(id: number) {
    this.appstate$.dispatch(new formDesignAction.SetCurrentElementId(id));
  }
  deleteElement(id: number) {
    this.appstate$.dispatch(new formDesignAction.DeleteElement(id));
  }
  updateToggle() {
    this.appstate$.dispatch(new formDesignAction.UpdateToggle());
  }
  updateFormName(name: string) {
    this.appstate$.dispatch(new formDesignAction.UpdateFormName(name));
  }
  createForm(form: FormAttributes) {
    this.appstate$.dispatch(new formDesignAction.CreateForm(form));
  }
}
