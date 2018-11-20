import {Action} from '@ngrx/store';

export enum metaDataActionTypes {
  Load = '[META DATA] load',
  LoadSuccess = '[META DATA] load success',
  LoadFail = '[META DATA] load fail',
}
export class Load implements Action {
  readonly type = metaDataActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = metaDataActionTypes.LoadSuccess;
  constructor(public payload: any) {}
}
export class LoadFail implements Action {
  readonly type = metaDataActionTypes.LoadFail;
  constructor(public payload: any) {}
}

export type metaDataActions = Load | LoadSuccess | LoadFail;
