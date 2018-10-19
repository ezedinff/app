import {Action} from '@ngrx/store';
import {User} from '../../models/User';

export enum AuthActionTypes {
  GetUserInfo = '[AUTH] get user information',
  GetUserInfoSuccess = '[Auth] get user information success',
  GetUserInfoFail = '[Auth] get user information fail'
}

export class GetUserInfo implements Action {
  readonly type: string = AuthActionTypes.GetUserInfo;
  constructor(public payload: string) {}
}

export class GetUserInfoSuccess implements Action {
  readonly type: string = AuthActionTypes.GetUserInfoSuccess;
  constructor(public payload: User) {}
}

export class GetUserInfoFail implements Action {
  readonly type: string = AuthActionTypes.GetUserInfoFail;
  constructor(public payload: string) {}
}

export type AuthActions = GetUserInfo | GetUserInfoSuccess | GetUserInfoFail;
