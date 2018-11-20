import {Action} from '@ngrx/store';
import {BaseElement} from '../../models/BaseElement';
import {FormAttributes} from '../../models/model attributes/model-attributes';
import {Form} from '../../models/form';

export enum FormDesignActionTypes {
  Load = '[Element] load list of elements',
  SetCurrentElementId = '[Element] set current element id',
  UpdateFormName = '[Form name] update',
  CreateElement = '[Element] create element',
  UpdateElement = '[Element] update element',
  DeleteElement = '[Element] remove element',
  UpdateToggle = '[Element] update toggle',
  CreateForm = '[Form Design] create form',
}
export class Load implements Action {
  readonly type = FormDesignActionTypes.Load;
  constructor(public payload: BaseElement[]) {}
}

export class SetCurrentElementId implements Action {
  readonly type = FormDesignActionTypes.SetCurrentElementId;
  constructor(public payload: number) {}
}

export class CreateElement implements Action {
  readonly type = FormDesignActionTypes.CreateElement;
  constructor(public payload: BaseElement) {}
}

export class UpdateElement implements Action {
  readonly type = FormDesignActionTypes.UpdateElement;
  constructor(public payload: BaseElement) {}
}

export class UpdateToggle implements Action {
  readonly type = FormDesignActionTypes.UpdateToggle;
}

export class DeleteElement implements Action {
  readonly type = FormDesignActionTypes.DeleteElement;
  constructor(public payload: number) {}
}
export class UpdateFormName implements Action {
  readonly type = FormDesignActionTypes.UpdateFormName;
  constructor(public payload: string) {}
}
export class CreateForm implements Action {
  readonly type = FormDesignActionTypes.CreateForm;
  constructor(public payload: FormAttributes) {}
}
export type FormDesignActions = Load
  | SetCurrentElementId
  | CreateElement
  | UpdateElement
  | DeleteElement
  | UpdateToggle
  | UpdateFormName
  | CreateForm;
