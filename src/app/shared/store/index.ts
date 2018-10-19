import * as auth from './reducers/auth.reducer';
import {ActionReducer, ActionReducerMap, combineReducers, compose, createFeatureSelector, createSelector} from '@ngrx/store';
import {getUser} from './reducers/auth.reducer';

/**
 * i treat each reducer like database table. this means top
 * level state interface is just a map of keys to inner state types
 */

export interface State {
  authState: auth.State;
}


export const reducers: ActionReducerMap<State> = {
  authState: auth.reducer
};

// creating selectors
const getAuthState = createFeatureSelector('authState');
export const getLoggedUser = createSelector(getAuthState, getUser);
