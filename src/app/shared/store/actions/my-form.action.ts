import {Action} from '@ngrx/store';
import {Form} from '../../models/form';

export enum MyFormActionTypes {
  Load = '[My Form] load forms',
  LoadSuccess = '[My Form] load forms success',
  LoadFail = '[My Form] load forms fail',
  SetSelectedFormId = '[My Form] set selected form id',
  CreateFormSuccess = '[My Form] form create success',
  CreateFormFailed = '[My Form] form create failed'
}
export class Load implements Action {
  readonly type = MyFormActionTypes.Load;
}
export class SetSelectedFormId implements Action {
  readonly type = MyFormActionTypes.SetSelectedFormId;
  constructor(public payload: number) {}
}
export class LoadSuccess implements Action {
  readonly type = MyFormActionTypes.LoadSuccess;
  constructor(public payload: Form[]) {}
}
export class LoadFail implements Action {
  readonly type = MyFormActionTypes.LoadFail;
  constructor(public payload: string) {}
}
export class CreateFormSuccess implements Action {
  readonly type = MyFormActionTypes.CreateFormSuccess;
  constructor(public payload: Form) {}
}
export class CreateFormFailed implements Action {
  readonly type = MyFormActionTypes.CreateFormFailed;
  constructor(public payload: string) {}
}
export type MyFormActions =  Load
  | LoadSuccess
  | LoadFail
  | SetSelectedFormId
  | CreateFormSuccess
  | CreateFormFailed;
