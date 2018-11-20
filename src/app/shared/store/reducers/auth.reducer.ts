import {User} from '../../models/User';
import {AuthActions, AuthActionTypes} from '../actions/auth.action';

export interface State {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  user: User | string;
}
const INITIAL_STATE: State = {
  loading: false,
  loaded: false,
  failed: false,
  user: {name: '', email: '', id: 0}
};

export function reducer(state = INITIAL_STATE, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.GetUserInfoSuccess:
      return {...state, loaded: true, user: action.payload, loading: false, failed: false};
    case AuthActionTypes.GetUserInfoFail:
      location.assign('http://localhost:4200');
      break;
    default:
      return state;
  }
}
export const getUser = (state: State) => state.user;
